import { MiddlewareFn } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { User } from "../entity/User";
import { UserRole } from "../entity/UserToSite";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { BadTokenError } from "../errors/BadTokenError";
import { UserRepository } from "../repository/UserRepository";
import { MyContext } from "../types/MyContext";
import { jwtVerify } from "../utils/jwt";

export function isAuth(
    role: UserRole = UserRole.Normal
): MiddlewareFn<MyContext> {
    return async ({ context, args }, next) => {
        const {
            headers: { token }
        } = context.req;

        if (token && typeof token === "string") {
            const { device, id, iat } = jwtVerify(token);

            if (device && id && iat) {
                // 20 day
                const tokenAge = 60 * 60 * 24 * 20;
                if (Math.floor(Date.now() / 1000) - iat > tokenAge) {
                    throw new BadTokenError();
                }

                const userRepository = getCustomRepository(UserRepository);
                let user: User | undefined;
                if (role !== UserRole.Normal) {
                    user = await userRepository.findOneByIdAndSimilarRole(
                        id,
                        role
                    );
                    console.log(user);
                } else {
                    user = await User.findOne({
                        where: { id },
                        relations: ["userToSites"]
                    });
                }

                if (!user) {
                    throw new AuthorizationError();
                }

                if (user && user.devices.includes(device)) {
                    context.userId = id;
                    args.user = user;
                    return next();
                }
            }

            throw new BadTokenError();
        }

        throw new AuthenticationError();
    };
}
