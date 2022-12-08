export function format_price(cents) {
    return (cents).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }