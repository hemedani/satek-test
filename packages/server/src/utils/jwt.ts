import { sign, verify } from "jsonwebtoken";

import { DecodedJwt } from "../types/DecodedJwt";

export function jwtSign(id: string, device: string) {
    return sign({ id, device, iat: Math.floor(Date.now() / 1000) }, "justSimpleText");
}

export function jwtVerify(token: string): DecodedJwt {
    return verify(token, "justSimpleText") as DecodedJwt;
}