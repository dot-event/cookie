import Store from "dot-store"
import composeStore from "../dist/cookie"

describe("empty cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "",
    }
    global.document = document
  })

  test("fetch empty", async () => {
    const store = composeStore(new Store())
    expect(await store.fetch("cookies.hello")).toBe(
      undefined
    )
  })

  test("update", async () => {
    const store = composeStore(new Store())
    await store.update("cookies.hello", "world")
    expect(document.cookie).toBe("hello=world")
    expect(store.get("cookies.hello")).toBe("world")
  })
})

describe("exiting cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "hello=world",
    }
    global.document = document
  })

  test("fetch", async () => {
    const store = composeStore(new Store())
    expect(await store.fetch("cookies.hello")).toBe("world")
  })

  test("update", async () => {
    const store = composeStore(new Store())
    await store.update("cookies.hello", "world2")
    expect(document.cookie).toBe("hello=world2")
    expect(store.get("cookies.hello")).toBe("world2")
  })
})
