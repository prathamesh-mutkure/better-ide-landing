import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RotatingText from "./components/rotating-text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header></header>

        <section
          id="hero"
          className="relative flex flex-col flex-auto justify-center items-center gap-5"
        >
          <h1 className="text-6xl">
            One stop env for <br /> devs on Arweave
          </h1>

          <h1 className="item-start font-heading text-4xl">
            <RotatingText
              texts={["Build Fast", "Ship Fast", "Use BetterIDE"]}
              period={1000}
            />
          </h1>

          <div className="flex flex-row justify-center items-center gap-5 pt-2">
            <button>Start Building</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
