import App from "./App.svelte"
import "./index.global.css"

export const app = new App({
  target: document.getElementById("root")!,
})
