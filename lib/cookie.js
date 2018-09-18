// Packages
import Cookies from "js-cookie"

export default function composeCookie(store) {
  store.withOp("cookie").onAny(cookie)
  return store
}

// Helpers
async function cookie({ event, store }) {
  const props = event.props.join(".")
  const value = getValue({ event, props })

  if (event.args) {
    Cookies.set(props, value)
  }

  await store.set(props, value)

  event.signal.returnValue = value
}

function getValue({ event, props }) {
  if (event.args) {
    return event.args[0]
  } else {
    return Cookies.getJSON(props)
  }
}
