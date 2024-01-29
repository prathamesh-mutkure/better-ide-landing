import RotatingText from "./components/rotating-text";

function App() {
  return (
    <main className="relative bg-black text-white" data-theme="night">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header></header>

        <section
          id="hero"
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-5"
        >
          <h1 className="text-6xl capitalize font-extrabold">
            One stop enviornment <br />
            for devs on Arweave
          </h1>

          <h1 className="item-start font-heading text-4xl">
            <RotatingText
              texts={["Build Fast", "Ship Fast", "Use BetterIDE"]}
              period={1000}
            />
          </h1>

          <div className="flex flex-row justify-center items-center gap-5 pt-2">
            <button className="btn">Start Building</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
