import composeStore from "dot-store"
import composeCookie from "../dist/cookie"

describe("empty cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "",
    }
    global.document = document
  })

  test("empty", async () => {
    const store = composeCookie(composeStore())
    expect(await store.cookie("hello")).toBe(undefined)
  })

  test("update", async () => {
    const store = composeCookie(composeStore())
    await store.cookie("hello", "world")
    expect(document.cookie).toBe("hello=world")
    expect(store.get("hello")).toBe("world")
  })
})

describe("existing cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "hello=world",
    }
    global.document = document
  })

  test("read", async () => {
    const store = composeCookie(composeStore())
    expect(await store.cookie("hello")).toBe("world")
  })

  test("update", async () => {
    const store = composeCookie(composeStore())
    await store.cookie("hello", "world")
    expect(document.cookie).toBe("hello=world")
    expect(store.get("hello")).toBe("world")
  })
})

describe("empty object cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "",
    }
    global.document = document
  })

  test("update", async () => {
    const store = composeCookie(composeStore())
    await store.cookie("hello", { world: true })
    expect(document.cookie).toBe("hello={%22world%22:true}")
    expect(store.get("hello")).toEqual({ world: true })
  })
})

describe("existing object cookie", () => {
  beforeEach(() => {
    const document = {
      cookie: "hello={%22world%22:true}",
    }
    global.document = document
  })

  test("read", async () => {
    const store = composeCookie(composeStore())
    await store.cookie("hello")
    expect(store.get("hello")).toEqual({ world: true })
  })
})
