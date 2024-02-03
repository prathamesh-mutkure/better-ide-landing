import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";
import { cn } from "./lib/utils";

function Card({
  label,
  Icon,
  gradient = "",
}: {
  label: string;
  Icon: LucideIcon;
  gradient?: string;
}) {
  return (
    <div
      className={cn(
        "bg-transparent flex flex-col justify-center items-center gap-3 h-32 w-32 lg:h-40 lg:w-40 cursor-pointer transition-all p-4 rounded-2xl hover:bg-white/15",
        gradient
      )}
    >
      {/* border border-white/50 */}
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
                  <img className="h-5 w-5" src="/logo.png" />
                </div>
              </div>

              <a className="btn btn-ghost text-xl hidden lg:flex">
                <img className="h-10 w-10" src="/logo.png" />
                BetterIDEa
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

          <div className="flex flex-row gap-4">
            <a
              className="rounded-2xl bg-white text-black px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
              href="https://twitter.com/betteridea_dev"
              target="_blank"
              rel="noreferer"
            >
              <Icons.twitter className="h-4 w-4 text-black" />
            </a>

            <a
              className="rounded-2xl bg-[#5462EB] bg-white text-black px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
              href="https://twitter.com/betteridea_dev"
              target="_blank"
              rel="noreferer"
            >
              <Icons.discord className="h-4 w-4 text-black" />
              discord
            </a>
          </div>

          <h1 className="text-6xl capitalize font-extrabold z-20">
            One stop enviornment <br />
            for devs on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Arweave
            </span>
          </h1>

          {/* <p className="text-gray-400 text-2xl capitalize z-20">
            Build fast. Ship fast.{" "}
            <span className="hover:underline">Using BetterIDEa.</span>
          </p> */}

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

      <section id="steps" className="relative flex flex-col gap-24 py-24 px-8">
        <h2 className="text-5xl font-bold text-center">
          Getting started is as easy as
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <Card
            label="Code"
            Icon={Icons.code}
            gradient="bg-gradient-to-r from-fuchsia-600 to-purple-600"
          />
          <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
          <Card
            label="Deploy"
            Icon={Icons.deploy}
            gradient="bg-gradient-to-r from-indigo-400 to-cyan-400"
          />
          <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
          <Card
            label="Test"
            Icon={Icons.test}
            gradient="bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>
      </section>

      <section
        id="demo"
        className="flex flex-col justify-center items-center w-full gap-24 py-24 px-8"
      >
        <h2 className="text-5xl font-bold text-center">...try it rn!</h2>

        <div className="mockup-browser w-full max-w-screen-xl border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://ide.betteridea.dev/</div>
          </div>

          <div className="flex justify-center w-full aspect-[16/9] bg-base-200">
            <iframe
              src="https://ide.betteridea.dev"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      <section
        id="form"
        className="flex flex-col justify-center items-center w-full gap-24 py-24 px-8"
      >
        <h2 className="text-5xl font-bold text-center">
          If you haven't already...
        </h2>

        <div className="flex flex-row justify-evenly gap-4 w-full items">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-6 items-center">
              <p>follow us</p>

              <a
                className="rounded-2xl bg-white text-black px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
                href="https://twitter.com/betteridea_dev"
                target="_blank"
                rel="noreferer"
              >
                <Icons.twitter className="h-4 w-4 text-black" />
              </a>

              <a
                className="rounded-2xl bg-[#5462EB] bg-white text-black px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
                href="https://twitter.com/betteridea_dev"
                target="_blank"
                rel="noreferer"
              >
                <Icons.discord className="h-4 w-4 text-black" />
                discord
              </a>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <p>star github repo</p>

              <a
                className="rounded-2xl bg-[#5462EB] bg-white text-black px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
                href="https://twitter.com/betteridea_dev"
                target="_blank"
                rel="noreferer"
              >
                <Icons.github className="h-4 w-4 text-black" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <p className="text-center">send us a mail</p>

            <form className="flex flex-col gap-4 bg-gray-700 p-8 rounded-2xl w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">name</span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">name</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Query"
                ></textarea>
              </label>

              <button type="submit">Send mail</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <aside>
          <img src="/logo.png" className="h-20 w-20" />
          <p className="font-bold">
            Better IDE. <br />
            Building on Arweave
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/betteridea_dev">
              <Icons.twitter />
            </a>
            <a href="https://discord.gg/nm6VKUQBrA">
              {/* TODO: Add discord svg */}
              <Icons.discord />
            </a>
            <a href="mailto:hello@betteridea.dev">
              <Icons.mail />
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}

export default App;
