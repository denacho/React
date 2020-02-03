import React from "react";

function App() {
  const incorrectTitle = "Wrong title";
  const title = "My App";

  return (
    <section>
      <h1 className={""}>{title}</h1>
      <p data-testid="injection">{""}</p>
      <form>
        <label data-testid="label" htmlFor="">
          Demo:
        </label>
        <input data-testid="input" type="text" id="input-demo" />
      </form>
    </section>
  );
}

export { App };
