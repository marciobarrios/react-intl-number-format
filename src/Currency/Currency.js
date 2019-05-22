import React from "react"
import PropTypes from "prop-types"
import { Number } from "../"
import { useIntl } from "../IntlProvider"
import { defaultIntlConfig } from "../helpers"

const Currency = props => {
  const context = useIntl()

  const defaultCurrency = defaultIntlConfig.options.currency
  const currencyFromContext = context && context.config.options.currency
  const currency = props.currency || currencyFromContext || defaultCurrency

  return <Number currency={currency} {...props} />
}

Currency.propTypes = {
  ...Number.PropTypes,
  /** The currency to use in currency formatting */
  currency: PropTypes.string,
  /** How to display the currency in currency formatting */
  currencyDisplay: PropTypes.oneOf(["symbol", "code", "name"]),
  /** The formatting style to use. The option key in the Intl.NumberFormat API is called `styled`, but in React this prop is used for CSS styles */
  currencyStyle: PropTypes.oneOf(["decimal", "currency", "percent"]),
}

Currency.defaultProps = {
  currencyStyle: "currency",
}

export { Currency }
