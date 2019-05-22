import getUserLocale from "get-user-locale"

const defaultIntlConfig = {
  locale: getUserLocale(),
  options: {
    currency: "USD",
    currencyDisplay: "symbol",
    localeMatcher: "best fit",
    maximumFractionDigits: 2,
    maximumSignificantDigits: 21,
    minimumFractionDigits: 2,
    minimumIntegerDigits: 1,
    minimumSignificantDigits: 1,
    useGrouping: true,
  },
}

export { defaultIntlConfig }
