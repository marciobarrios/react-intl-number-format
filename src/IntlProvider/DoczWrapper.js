import React from "react"
import { IntlProvider } from "./IntlProvider"

const Wrapper = ({ children, config }) => (
  <IntlProvider config={config}>{children}</IntlProvider>
)

export default Wrapper
