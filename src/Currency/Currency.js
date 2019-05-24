import React from "react"
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
}

Currency.defaultProps = {
  currencyStyle: "currency",
}

export { Currency }
