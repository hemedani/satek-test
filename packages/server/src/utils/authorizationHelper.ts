import { User } from "../entity/User";
import { UserRole } from "../entity/UserToSite";
import { AuthorizationError } from "../errors/AuthorizationError";
import { BadRequestError } from "../errors/BadRequest";

export function isAuthorize(user: User, userRole: UserRole, siteId?: string) {
    if (!user.userToSites) {
        throw new BadRequestError();
    }

    const userToSites = user.userToSites.filter(
        userToSite =>
            userToSite.role === userRole && userToSite.siteId === siteId
    );

    if (userToSites.length < 1) {
        return false;
    }
    return true;
}

export function checkAuthorization(
    user: User,
    userRole: UserRole,
    siteId?: string
) {
    const result = isAuthorize(user, userRole, siteId);
    if (!result) {
        throw new AuthorizationError();
    }
    return true;
}

export function hasRole(user: User, userRole: UserRole) {
    if (!user.userToSites) {
        throw new BadRequestError();
    }

    const userToSites = user.userToSites.filter(
        userToSite => userToSite.role === userRole
    );

    if (userToSites.length < 1) {
        return false;
    }
    return true;
}
