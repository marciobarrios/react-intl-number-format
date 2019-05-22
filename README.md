---
name: Readme
route: /
---

# react-intl-number-format

Tiny react component that wraps the ECMAScript Internationalization API with sane defaults to work with numbers and currencies.

## Features

- Effortless format numbers and currencies for different locales
- Relies in the standard [Intl.NumberFormat constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
- Possibility to use it as an standalone React Component using props to configure it
- Possibility to use a general config using a React Context Provider
- Detects automatically the browser language as a default locale
- Exposes a function to update the Provider config
- Ability to render a number or a currency with any html tag
- Props match [Intl.NumberFormat constructor arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters)

## Support
- [Works in any modern browsers, and IE >= 11](https://caniuse.com/#feat=internationalization)

## Installation

```shell
npm i react-intl-number-format
```

## Usage

This is the easiest way to use it:

```js
import { Number } from "react-intl-number-format"

const HelloWorld = () => (
  <Number locale="de-DE">20000</Number> // renders 20.000
)
```

You don't even need to pass a `locale` prop, by default it will try guess the locale from the browser.

## Recommended usage with a React Context Provider

The recommended way to use it would be with a Context.Provider, this will allow you to have a global configuration so you don't need to pass props every time you format a number or a currency.

```js
// In your App.js or similar...
import { IntlProvider } from "react-intl-number-format"

const IntlConfig = {
  locale: "en-US",
  options: {
    currency: "USD",
    maximumFractionDigits: 2
  }
}

const App = () => (
  <IntlProvider config={IntlConfig}>
    ...
  </IntlProvider>
)

// In any other part of your code
import { Currency } from "react-intl-number-format"

const HelloWorld = () => (
  <Currency>20000</Currency> // renders $20,000 (based on the provider config)
)
```
The configuration object that `IntlProvider` expects is basically matching [the arguments from Intl.NumberFormat constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters).



