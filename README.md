# money-input

## Why?

Money is a pretty specific use case for an input, and browser implementations have made it challenging.

## What does this do?

This will present an input on the page that will allow valid<sup>[1](#validMoney)</sup> money inputs.  It will call
a `setAmount` function that MUST be passed in with the new amount.  It will accept an OPTIONAL `defaultAmount` argument
that will override any previously user-entered input.

## How do I use this?

`<MoneyInput setAmount={this.handleAmountChange}/>`

OR

`<MoneyInput setAmount={this.handleAmountChange} defaultAmount={this.state.amount} />`

The latter case is useful when there are two paths by which the value can change (ie, a form whose inputs can also be
controlled by buttons).

<a name="validMoney">1</a>: Valid money amounts are integers (which will be interpreted as "major currency
units" (ie. dollars), an integer followed by a period (.) (which is also interpreted as a major currency unit),
or a decimal value up to two places (which is interpreted as major and minor currency units, ie, dollars and cents.)
