import React, { Component, Suspense } from "react";

function lazyWithPreload(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}
const Comp = lazyWithPreload(() => {
  return import("./component/mycomp");
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>header</div>
        <Suspense fallback={<div>loading...</div>}>{<Comp />}</Suspense>
      </div>
    );
  }
}

export default App;
