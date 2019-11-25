export function addOrderBy(query: any, key: string, ascOrDesc: string) {
    query.orderBy(key, ascOrDesc);
}
