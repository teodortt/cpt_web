export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(amount)
}

export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  const parts = numberFormat.formatToParts(amount)
  let zeroDecimalCurrency: boolean = true
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}

const adultsPrice = 59;
const kidsPrice = 49;
let subtotalPrice;
let totalPrice;
let taxPrice;
const taxRate = 8.875 / 100;

export function calculateTotalPrice(count) {
  subtotalPrice = count.adults * adultsPrice + count.kids * kidsPrice;
  totalPrice = subtotalPrice + subtotalPrice * taxRate;
  taxPrice = subtotalPrice * taxRate;
  return Math.round(totalPrice * 1);
  // console.log('subtotal ' + subtotal + 'total ' + total);
}