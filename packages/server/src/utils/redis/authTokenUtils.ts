import { redis } from '../../redis'

const verificationConstant = "verification:";

interface RedisKey {
    userId: string
    device: string
}

const makeVerificationKey = ({ userId, device }: RedisKey) => {
    return verificationConstant + userId + ":" + device
}

export const setVerificationToken = (redisKey: RedisKey, token: string) => {
    return redis.set(makeVerificationKey(redisKey), token, "ex", 100)
}

export const getVerificationToken = (redisKey: RedisKey) => {
    return redis.get(makeVerificationKey(redisKey))
}

export const delVerificationToken = (redisKey: RedisKey) => {
    return redis.del(makeVerificationKey(redisKey))
}
