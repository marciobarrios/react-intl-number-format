# react-intl-number-format

[![npm version](https://img.shields.io/npm/v/react-intl-number-format.svg)](https://www.npmjs.com/package/react-intl-number-format)
[![Build Status](https://travis-ci.com/marciobarrios/react-intl-number-format.svg?branch=master)](https://travis-ci.com/marciobarrios/react-intl-number-format)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/marciobarrios/react-intl-number-format/master.svg?style=flat-square)](https://codecov.io/gh/marciobarrios/react-intl-number-format/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Tiny React components wrapping the ECMAScript Internationalization API with sane defaults to format numbers and currencies.

To see in detail the components `Number` and `Currency` with the list of props and examples please [check the documentation site](https://react-intl-number-format.netlify.com/).

You can also play with `react-intl-number-format` in a [CodeSandbox](https://codesandbox.io/s/reactintlnumberformat-3o5yg).

## Features

- Effortless format numbers and currencies for different locales
- Relies in the standard [Intl.NumberFormat constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
- Use as an standalone React Component using props to configure it
- Use with a global configuration using a React Context Provider
- Detects automatically the browser language as a default locale
- Exposes a [React Hook](https://reactjs.org/docs/hooks-overview.html) to update the Provider config
- Ability to render a number or a currency with any html tag
- Props match [Intl.NumberFormat constructor arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters)
- [Works in any modern browsers, and IE >= 11](https://caniuse.com/#feat=internationalization)

## Installation

```shell
npm i react-intl-number-format
```

## Usage

This is the easiest way to use `Number` or `Currency` formatter components:

```js
import { Number, Currency } from "react-intl-number-format"

// renders 20.000
const Foo = () => (
  <Number locale="de-DE">20000</Number>
)

// renders $20,000.00
const Bar = () => (
  <Currency locale="en-US" currency="USD">20000</Currency>
)

// renders $20K
const FooBar = () => (
  <Currency locale="en-US" currency="USD" notation="compact">20130</Currency>
)
```

You don't even need to pass a `locale` prop, by default it will try guess the locale from the browser.

## Recommended usage with a React Context Provider

The recommended way to use it would be with a [Context.Provider](https://reactjs.org/docs/context.html#contextprovider), this will allow you to have a global configuration so you don't need to pass props every time you format a number or a currency.

A provider `IntlProvider` is exposed with a default config, but you can you set your own config and use it in your `App` component. Also it's exposed a [React Hook](https://reactjs.org/docs/hooks-overview.html) `useIntl` to be able to [update the formatting configuration for the Provider](https://react-intl-number-format.netlify.com/recipes#change-the-context-provider-configuration-programatically).

```js
// In your App.js or similar...
import { IntlProvider } from "react-intl-number-format"

const intlConfig = {
  locale: "en-US",
  options: {
    currency: "USD",
    maximumFractionDigits: 2
  }
}

const App = () => (
  <IntlProvider config={intlConfig}>
    ...
  </IntlProvider>
)

// In any other part of your code
import { Currency } from "react-intl-number-format"

const HelloWorld = () => (
  // renders $20,000 (based on the provider config)
  <Currency>20000</Currency>
)
```

The configuration object that `IntlProvider` expects is basically matching [the arguments from Intl.NumberFormat constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters).



