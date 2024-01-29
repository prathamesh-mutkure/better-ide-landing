import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";

function Card({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div className="bg-transparent flex flex-col justify-center items-center gap-3 h-32 w-32 lg:h-40 lg:w-40 cursor-pointer transition-all p-4 rounded-xl border border-white/50 hover:bg-white/15">
      <Icon />

      <h3 className="text-lg">{label}</h3>

      <Icons.arrowDown />
    </div>
  );
}

function App() {
  return (
    <main className="relative bg-black text-white" data-theme="luxury">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header className="w-full fixed top-0 left-0 right-0 z-20">
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
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen"
        >
          <div className="overlay absolute z-10 top-0 bottom-0 left-0 right-0 h-full w-full bg-black bg-[linear-gradient(0deg,rgba(0,0,0,1)_25%,rgba(0,0,0,0)_80%)]"></div>

          <h1 className="text-6xl capitalize font-extrabold z-20">
            One stop enviornment <br />
            for devs on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Arweave
            </span>
          </h1>

          <p className="text-gray-400 text-2xl capitalize z-20">
            Build fast. Ship fast.{" "}
            <span className="hover:underline">Using BetterIDEa.</span>
          </p>

          <div className="flex flex-row justify-center items-center gap-5 pt-2 z-10">
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

      <section id="steps" className="relative flex flex-col gap-20 py-24 px-8">
        <h2 className="text-4xl font-bold text-center lg:text-left">
          Getting started is easy as 1,2,3...
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <Card label="Code" Icon={Icons.code} />
          <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
          <Card label="Deploy" Icon={Icons.deploy} />
          <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
          <Card label="Test" Icon={Icons.test} />
          <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
          <Card label="Iterate" Icon={Icons.iterate} />
        </div>
      </section>
    </main>
  );
}

export default App;
