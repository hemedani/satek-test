export function priceWithPercent(price: number, pricePercent: number): number {
    const extra = Math.ceil((pricePercent * price) / 100);
    return price + extra;
}
