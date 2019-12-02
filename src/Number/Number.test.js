import React from "react"
import { Number } from "."
import { render } from "react-testing-library"
import { IntlProvider } from "../IntlProvider"

const NUMBER = 201300.9832

// Note: ICU data is limited in the default Node build, so I'm only using "en-US" locale for tests
// More info: https://stackoverflow.com/questions/55183776/different-behaviour-of-intl-numberformat-in-node-and-browser
describe("Number", () => {
  describe("without a config Provider", () => {
    test("formats a number with the default config", () => {
      const { container } = render(<Number>{NUMBER}</Number>)

      expect(container.textContent).toBe("201,300.983")
    })

    test("formats a number", () => {
      const { container } = render(
        <Number locale="en-US" maximumFractionDigits={2}>
          {NUMBER}
        </Number>
      )

      expect(container.textContent).toBe("201,300.98")
    })

    test("renders a number with a custom tag", () => {
      const { container } = render(
        <Number as="span" locale="en-US" maximumFractionDigits={2}>
          {NUMBER}
        </Number>
      )

      expect(container.textContent).toBe("201,300.98")
      expect(container.firstChild.nodeName).toBe("SPAN")
    })

    test("doesn't render if children is not valid", () => {
      const { container } = render(
        <Number locale="en-US" maximumFractionDigits={2}>
          Foo bar
        </Number>
      )

      expect(container.textContent).toBe("")
    })
  })

  describe("with a config Provider", () => {
    test("formats a number", () => {
      const { container } = render(
        <IntlProvider
          config={{ locale: "en-US", options: { maximumFractionDigits: 2 } }}
        >
          <Number>{NUMBER}</Number>
        </IntlProvider>
      )

      expect(container.textContent).toBe("201,300.98")
    })

    test("formats a number overwritting props from context", () => {
      const props = {
        locale: "en-US",
        localeMatcher: "best fit",
        currency: undefined,
        currencyDisplay: "symbol",
        currencyStyle: "decimal",
        useGrouping: true,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 0,
        maximumFractionDigits: 10,
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 10,
        notation: "standard",
        compactDisplay: "short",
      }

      const { container } = render(
        <IntlProvider
          config={{ locale: "en-US", options: { maximumFractionDigits: 4 } }}
        >
          <Number {...props}>{NUMBER}</Number>
        </IntlProvider>
      )

      expect(container.textContent).toBe("201,300.9832")
    })
  })
})
