import React, { createContext, useContext, useMemo, useState } from "react"
import { defaultIntlConfig } from "../helpers"

const IntlContext = createContext()

const useIntl = () => useContext(IntlContext)

const IntlProvider = props => {
  const [config, setConfig] = useState({
    ...defaultIntlConfig,
    ...props.config,
  })

  const value = useMemo(
    () => ({
      config,
      setConfig,
    }),
    [config]
  )

  return <IntlContext.Provider value={value} {...props} />
}

export { useIntl, IntlProvider, defaultIntlConfig }
