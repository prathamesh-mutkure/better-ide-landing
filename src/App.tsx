import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-screen w-screen flex flex-col items-center justify-center">
        <h1>Hello</h1>
      </section>
    </>
  );
}

export default App;
