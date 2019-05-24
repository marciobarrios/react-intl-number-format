import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "../IntlProvider"
import { defaultIntlConfig } from "../helpers"

const Number = ({
  as: Tag,
  locale,
  children,
  localeMatcher,
  currency,
  currencyStyle,
  currencyDisplay,
  useGrouping,
  minimumIntegerDigits,
  minimumFractionDigits,
  maximumFractionDigits,
  minimumSignificantDigits,
  maximumSignificantDigits,
}) => {
  const context = useIntl()

  const localeFromContext = context && context.config.locale
  const optionsFromContext = context && context.config.options

  const isDefined = key => key !== undefined

  // Only keep props that are not undefined
  const optionsFromProps = {
    ...(isDefined(localeMatcher) && { localeMatcher }),
    ...(isDefined(currency) && { currency }),
    ...(isDefined(currencyDisplay) && { currencyDisplay }),
    ...(isDefined(useGrouping) && { useGrouping }),
    ...(isDefined(minimumIntegerDigits) && { minimumIntegerDigits }),
    ...(isDefined(minimumFractionDigits) && { minimumFractionDigits }),
    ...(isDefined(maximumFractionDigits) && { maximumFractionDigits }),
    ...(isDefined(minimumSignificantDigits) && { minimumSignificantDigits }),
    ...(isDefined(maximumSignificantDigits) && { maximumSignificantDigits }),
    ...(isDefined(currencyStyle) && { style: currencyStyle }),
  }

  const setLocale = locale || localeFromContext || defaultIntlConfig.locale
  const setOptions = { ...optionsFromContext, ...optionsFromProps }

  const formattedNumber = new Intl.NumberFormat(setLocale, setOptions).format(
    children
  )

  return isNaN(children) ? null : <Tag>{formattedNumber}</Tag>
}

Number.propTypes = {
  /** Number to format */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** A string with a BCP 47 language tag, or an array of such strings. e.g. "en-US". If you don't provide any locale via Context Provider or props, the locally will be guessed from the browser */
  locale: PropTypes.string,
  /** The locale matching algorithm to use */
  localeMatcher: PropTypes.oneOf(["lookup", "best fit"]),
  /** The currency to use in currency formatting */
  currency: PropTypes.string,
  /** How to display the currency in currency formatting */
  currencyDisplay: PropTypes.oneOf(["symbol", "code", "name"]),
  /** The formatting style to use. The option key in the Intl.NumberFormat API is called `styled`, but in React this prop is used for CSS styles */
  currencyStyle: PropTypes.oneOf(["decimal", "currency", "percent"]),
  /** Whether to use grouping separators, such as thousands separators */
  useGrouping: PropTypes.bool,
  /** The minimum number of integer digits to use [1-21] */
  minimumIntegerDigits: PropTypes.number,
  /** The minimum number of fraction digits to use [0-20] */
  minimumFractionDigits: PropTypes.number,
  /** The maximum number of fraction digits to use [0-20] */
  maximumFractionDigits: PropTypes.number,
  /** The minimum number of significant digits to use [1-21] */
  minimumSignificantDigits: PropTypes.number,
  /** The maximum number of significant digits to use [1-21] */
  maximumSignificantDigits: PropTypes.number,
}

Number.defaultProps = {
  as: "div",
}

export { Number }
