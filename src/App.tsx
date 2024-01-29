function App() {
  return (
    <main className="relative bg-black text-white" data-theme="luxury">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header className="w-full fixed top-0 left-0 right-0 z-10">
          <div className="navbar w-full">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <img className="h-5 w-5" src="/vite.svg" />
                </div>
              </div>

              <a className="btn btn-ghost text-xl hidden lg:flex">
                <img className="h-10 w-10" src="/vite.svg" />
              </a>
            </div>

            <div className="navbar-center hidden lg:flex"></div>

            <div className="navbar-end gap-2">
              <a
                href="https://ide.betteridea.dev/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Better IDE
              </a>

              <a
                href="https://ide.betteridea.dev/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                AO Notebook
              </a>
            </div>
          </div>
        </header>

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

          <p className="text-gray-400 text-2xl capitalize">
            Build fast. Ship fast.{" "}
            <span className="hover:underline">Using BetterIDEa.</span>
          </p>

          <div className="flex flex-row justify-center items-center gap-5 pt-2">
            <a
              className="btn btn-primary"
              href="https://ide.betteridea.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Start Building
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
