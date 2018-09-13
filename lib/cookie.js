// Packages
import Cookies from "js-cookie"

export default function composeCookie(store) {
  store.setOps("cookie")
  store.onAny("cookie", cookie)
  return store
}

// Helpers
async function cookie({ event, store }) {
  const value = getValue(event)

  if (event.extras) {
    Cookies.set(event.props, value)
  }

  await store.set(event.props, value)

  event.signal.returnValue = value
}

function getValue(event) {
  if (event.extras) {
    return event.extras[0]
  } else {
    return Cookies.getJSON(event.props)
  }
}
