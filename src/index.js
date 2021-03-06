import App from "./App.svelte";

let app = new App({
  target: document.body,
});

export default app;

// The snippet below re-renders the app on file change
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
  undefined /* [snowpack] import.meta.hot */
    .dispose(() => {
      app.$destroy();
    });
}
