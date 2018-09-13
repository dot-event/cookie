// Packages
import Cookies from "js-cookie"

export default function composeStore(store) {
  store.setOps("fetch", "update")
  store.onAny("fetch", "cookies.{cookieKey}", fetchCookie)
  store.onAny("update", "cookies.{cookieKey}", updateCookie)
  return store
}

// Helpers
async function fetchCookie({ cookieKey, event, store }) {
  const value = Cookies.getJSON(cookieKey)
  await store.set(`cookies.${cookieKey}`, value)
  event.signal.returnValue = value
}

async function updateCookie({ cookieKey, event, store }) {
  const { extras } = event
  const value = extras[0]
  Cookies.set(cookieKey, value)
  await store.set(`cookies.${cookieKey}`, value)
}
