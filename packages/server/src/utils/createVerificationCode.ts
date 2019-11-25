export const createVerificationCode = (): string => {
    return Math.floor(Math.random() * (999999 - 100000) + 100000).toString();
}
