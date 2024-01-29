function App() {
  return (
    <main className="relative bg-black text-white" data-theme="luxury">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header></header>

        <section
          id="hero"
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen bg-[radial-gradient(39.13%_66.21%_at_69.97%_53.55%,_#000000_0%,_#080918_100%)]"
        >
          <h1 className="text-6xl capitalize font-extrabold">
            One stop enviornment <br />
            for devs on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Arweave
            </span>
          </h1>

          <p className="text-gray-400 text-2xl">
            Build fast. Ship fast. Using BetterIDEa.
          </p>

          <div className="flex flex-row justify-center items-center gap-5 pt-2">
            <button className="btn btn-primary">Start Building</button>
          </div>
        </section>
      </div>
    </main>
  );
}

{
  /* <h1 className="item-start font-heading text-4xl">
            <RotatingText
              texts={["Build Fast", "Ship Fast", "Use BetterIDE"]}
              period={1000}
            />
          </h1> */
}

export default App;
