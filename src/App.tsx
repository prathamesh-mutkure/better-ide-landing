import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";
import { cn } from "./lib/utils";
import { ReactNode, useRef } from "react";
// import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";

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
        "bg-transparent flex flex-row justify-center items-center gap-6 h-24 lg:h-40 aspect-[1.5] cursor-pointer transition-all p-4 rounded-2xl hover:bg-white/15",
        gradient
      )}
    >
      <h3 className="text-xl font-bold">{label}</h3>

      <Icon className="h-8 w-8" />
    </div>
  );
}

function SocialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="rounded-2xl text-white border px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
      href={href}
      target="_blank"
      rel="noreferer"
    >
      {children}
    </a>
  );
}

function NavLink(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel="noreferrer"
      className={cn("btn btn-ghost", props.className)}
    >
      {props.children}
    </a>
  );
}

const getStartedData = [
  ["explore contract templates", "or begin from scratch"],
  [],
  ["deploy locally", "or on the mainnet"],
  [],
  ["test for bugs on local deployment"],
];

const aoBookData = [
  {
    title: "Familiar Efficiency",
    desc: "Efficiency of Google Colab, providing a familiar structure for on-chain computations with ease.",
  },
  {
    title: "Ease of Usability",
    desc: "User-friendly interface, designed for effortless navigation and coding.",
  },
  {
    title: "Streamlined Workflows",
    desc: "Thoughtfully streamlined workflows for maximum productivity and creativity.",
  },
];

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLTextAreaElement>(null);

  // TODO: Integrate API and toast
  async function onQuerySubmit() {
    const name = nameRef.current?.value;
    const query = nameRef.current?.value;

    // startWindToast(
    //   "Success",
    //   "You'll hear from us soon",
    //   "success",
    //   3,
    //   "bottom"
    // );

    if (!name || !query) {
      return;
    }

    console.log({ name, query });
  }

  return (
    <main className="relative bg-black text-white" data-theme="light">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <header className="w-full fixed top-0 left-0 right-0 z-20">
          <div className="navbar w-full p-4 md:p-8 lg:p-12">
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

            <div className="navbar-end gap-8">
              <NavLink href="/" target="_self">
                Home
              </NavLink>

              <NavLink href="https://ide.betteridea.dev/">
                IDE <Icons.arrowLink className="h-4 w-4" />
              </NavLink>

              <NavLink href="#">Team</NavLink>
            </div>
          </div>
        </header>

        <section
          id="hero"
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen"
        >
          <div className="overlay absolute z-10 top-0 bottom-0 left-0 right-0 h-full w-full bg-black"></div>

          <div className="flex flex-row gap-4">
            <SocialLink href="https://twitter.com/betteridea_dev">
              <Icons.twitter className="h-4 w-4" fill="white" color="white" />
            </SocialLink>

            <SocialLink href="https://twitter.com/betteridea_dev">
              <Icons.discord className="h-4 w-4" />
              discord
            </SocialLink>
          </div>

          <h1 className="text-6xl capitalize z-20">
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
              className="px-8 py-2 bg-[#006F86] rounded-3xl"
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
        <h2 className="text-5xl text-center">Getting started is as easy as</h2>

        <div className="flex flex-row justify-center gap-12 lg:flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <Card
              label="Code"
              Icon={Icons.code}
              gradient="bg-[linear-gradient(166.68deg,_#2F0368_48.22%,_#E28BAA_98.47%,_#FA4888_98.47%)]"
            />
            <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
            <Card
              label="Deploy"
              Icon={Icons.deploy}
              gradient="bg-[linear-gradient(85.45deg,_#033168_33.65%,_#008D7C_92.6%)]"
            />
            <div className="h-16 w-0 lg:w-16 lg:h-0 border border-white/80"></div>
            <Card
              label="Test"
              Icon={Icons.test}
              gradient="bg-[linear-gradient(177.94deg,_#BC8700_47.8%,_#FAC848_105.69%)]"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {getStartedData.map((item, i) => {
              return item.length > 0 ? (
                <ul key={i} className="h-24 lg:h-40 aspect-[1.5] list-disc">
                  {item.map((label, j) => {
                    return <li key={j}>{label}</li>;
                  })}
                </ul>
              ) : (
                <div className="h-16 w-0 lg:w-16 lg:h-0"></div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="aobook"
        className="relative flex flex-col justify-center items-center gap-24 py-24 px-8"
      >
        <h2 className="text-4xl text-center">
          Introducing the all new{" "}
          <span className="bg-gradient-to-r from-[#006F86] to-white bg-clip-text text-transparent font-bold">
            AO notebook
          </span>{" "}
          only on{" "}
          <span className="bg-gradient-to-r from-[#006F86] to-white bg-clip-text text-transparent font-bold">
            BetterIDEa...
          </span>
        </h2>

        <div className="flex flex-row flex-wrap justify-center gap-8 max-w-[1000px]">
          {aoBookData.map((item, i) => {
            return (
              <div
                className="card w-[400px] border backdrop-blur-md bg-white/5 relative"
                key={i}
              >
                <div className="card-body z-20">
                  <h2 className="card-title font-bold">{item.title}</h2>

                  <p>{item.desc}</p>
                </div>

                {/* Fix Background Blur */}
                {/* <div className="w-[60px] h-[100px] bg-yellow-200 absolute right-2 bottom-0 top-4 z-10"></div> */}
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="demo"
        className="flex flex-col justify-center items-center w-full gap-24 py-24 px-8"
      >
        <h2 className="text-5xl text-center">...try it rn!</h2>

        <div
          className="mockup-browser w-full max-w-screen-xl border bg-base-300"
          data-theme="luxury"
        >
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
        <h2 className="text-5xl text-center">If you haven't already...</h2>

        <div className="flex flex-row justify-evenly gap-4 w-full items">
          <div className="flex flex-col gap-8">
            <div className="h-4"></div>

            <div className="flex flex-row gap-6 items-center">
              <p>follow us</p>

              <SocialLink href="https://twitter.com/betteridea_dev">
                <Icons.twitter className="h-4 w-4" fill="white" color="white" />
              </SocialLink>

              <SocialLink href="https://twitter.com/betteridea_dev">
                <Icons.discord className="h-4 w-4" />
                discord
              </SocialLink>
            </div>

            <div className="flex flex-row gap-6 items-center">
              <p>star github repo</p>

              <SocialLink href="https://twitter.com/betteridea_dev">
                <Icons.github className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[400px]">
            <p className="text-center">send us a mail</p>

            <form className="flex flex-col gap-4 bg-[#212121] p-8 rounded-2xl w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">name</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full rounded-lg text-black"
                  ref={nameRef}
                  required
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">query</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24 rounded-lg text-black"
                  placeholder=""
                  ref={queryRef}
                  required
                ></textarea>
              </label>

              <button
                type="button"
                className="px-8 py-2 bg-[#006F86] rounded-3xl"
                onClick={onQuerySubmit}
              >
                Send mail
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 rounded gap-y-16">
        <nav className="grid grid-flow-col gap-12">
          <NavLink href="/" target="_self">
            Home
          </NavLink>

          <NavLink href="https://ide.betteridea.dev/">IDE</NavLink>

          <NavLink href="#">Team</NavLink>
        </nav>

        <aside>
          <a href="/">
            <div className="flex flex-row gap-4 text-3xl cursor-pointer items-center">
              <img src="/logo.png" className="h-12 aspect-square" />
              BetterIDEa
            </div>
          </a>

          <div className="h-4"></div>

          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </main>
  );
}

export default App;
