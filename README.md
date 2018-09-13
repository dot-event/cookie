# dot-store-cookie

Cookie integration for dot-store.

![cookie in space](https://gifer.com/i/1cnu.gif)

## Install

```bash
npm install --save dot-event dot-store dot-store-cookie
```

## Create store

```js
import Events from "dot-event"
import composeStore from "dot-store"
import composeCookie from "dot-store-cookie"

const store = composeCookie(composeStore(new Events())
```

## Set cookie

```js
await store.cookie("hello", "world") // world
```

## Read cookie

```js
await store.cookie("hello") // world
store.get("hello") // world (cached)
```
