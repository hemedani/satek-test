import { plural } from "pluralize"

export function createResolverName(suffix: string) {
    return `create${suffix}`
}

export function deleteResolverName(suffix: string) {
    return `delete${suffix}`
}

export function getAllResolverName(suffix: string) {
    return `get${plural(suffix)}`
}

export function updateResolverName(suffix: string) {
    return `update${suffix}`
}

export function getResolverName(suffix: string) {
    return `get${suffix}`
}
