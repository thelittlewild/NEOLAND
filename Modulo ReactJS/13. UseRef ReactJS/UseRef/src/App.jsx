import { CodeUseRef } from "./components/CodeUseRef";
import { CodeRefFocus } from "./components/CodeRefFocus";

import "./App.css";
import { CodeInterval } from "./components/CodeInterval";
import { CodeUseRefCss } from "./components/CodeUseRefCss";
import { CodeTaxCalculator } from "./components/CodeTaxCalculator";

function App() {
  return (
    <>
      <CodeUseRef />
      <CodeRefFocus />
      <CodeInterval />
      <CodeTaxCalculator />
      <CodeUseRefCss />
    </>
  );
}

export default App;
