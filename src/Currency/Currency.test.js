import React from "react"
import { Currency } from "."
import { render } from "react-testing-library"
import { IntlProvider } from "../IntlProvider"

const NUMBER = 201300.9832

// Note: ICU data is limited in the default Node build, so I'm only using "en-US" locale for tests
// More info: https://stackoverflow.com/questions/55183776/different-behaviour-of-intl-numberformat-in-node-and-browser
describe("Currency", () => {
  test("renders a currency without a config Provider", () => {
    const { container } = render(
      <Currency locale="en-US" currency="USD" maximumFractionDigits={2}>
        {NUMBER}
      </Currency>
    )

    expect(container.textContent).toBe("$201,300.98")
  })

  test("renders a currency with a config Provider", () => {
    const { container } = render(
      <IntlProvider
        config={{
          locale: "en-US",
          options: { currency: "USD", maximumFractionDigits: 2 },
        }}
      >
        <Currency>{NUMBER}</Currency>
      </IntlProvider>
    )

    expect(container.textContent).toBe("$201,300.98")
  })
})
