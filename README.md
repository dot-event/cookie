# dot-store-cookie

Cookie integration for dot-store.

![cookie in space](https://gifer.com/i/1cnu.gif)

## Install

```bash
npm install --save dot-store-cookie
```

## Create store

```js
import composeStore from "dot-store-cookie"
const store = composeStore()
```

## Use store

```js
await store.update("cookies.hello", "world")
store.fetch("cookies.hello") // world
```
