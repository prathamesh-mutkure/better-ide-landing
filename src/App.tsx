import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";
import { cn } from "./lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
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
      className="rounded-2xl bg-black hover:bg-white/20 text-white border border-[#4C4C4C] px-4 py-1.5 text-sm font-medium z-20 flex flex-row gap-2 items-center"
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
      className={cn("btn btn-ghost hover:underline", props.className)}
    >
      {props.children}
    </a>
  );
}

function ActionButton(
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
      className={cn(
        "px-6 py-5 bg-[var(--green)] hover:bg-white rounded-3xl cursor-pointer text-center text-2xl text-[#212121]",
        props.className
      )}
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

  const [color, setcolor] = useState(false);

  function changeNavBg() {
    window.scrollY >= 90 ? setcolor(true) : setcolor(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

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
          <div
            className={cn(
              "navbar w-full md:px-8 md:py-4 lg:px-12 lg:py-6",
              color && "bg-white/15"
            )}
          >
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <img className="h-6 w-6" src="/logo.png" />
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

              <NavLink href="#" target="_self">
                Team
              </NavLink>
            </div>
          </div>
        </header>

        <section
          id="hero"
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen"
        >
          {/* Create a grid that has two rows on mobile and converts to single row on larger devices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h1 className="text-[84px] z-20 font-bold text-center lg:text-left">
              One stop env <br />
              for devs
              <br /> on <span className="text-[var(--green)]">Arweave</span>
            </h1>

            <div className="h-20 lg:hidden"></div>

            <div className="flex flex-col gap-10 items-center lg:items-end">
              <div className="flex flex-row gap-4 items-center justify-end">
                <button className="btn rounded-3xl h-full w-auto">
                  <Icons.plusCircle className="h-6 w-6" />
                </button>

                <ActionButton
                  className="z-10"
                  href="https://ide.betteridea.dev"
                >
                  Start Building
                </ActionButton>
              </div>

              <div className="text-[#686868] max-w-sm flex flex-col gap-4 text-center lg:text-right">
                <p>
                  // build without setting up <br /> extensive dev env from
                  scratch
                </p>

                <p>
                  you focus on writing good code,
                  <br /> we worry about execution, deal?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="steps" className="relative py-24 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
          <div className="flex flex-col gap-8 text-left">
            <h2 className="text-5xl">Getting started is as easy as</h2>

            <div className="h-[1px] w-[70%] bg-gray-500"></div>

            <p>
              // BetterIDEa provides a powerful,
              <br />
              and seamless developer experience
              <br />
              that lets you focus, on writing good code
              <br /> without worrying about execution.
            </p>

            <div className="flex-grow lg:min-h-20"></div>

            <ActionButton className="w-fit">Get Started</ActionButton>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center max-w-[524px] self-center justify-self-end">
            <div className="justify-self-center self-center">
              <Card
                label="Code"
                Icon={Icons.code}
                gradient="bg-[linear-gradient(166.68deg,_#2F0368_48.22%,_#E28BAA_98.47%,_#FA4888_98.47%)]"
              />
            </div>

            <div className="justify-self-center self-center row-span-2">
              <Card
                label="Deploy"
                Icon={Icons.deploy}
                gradient="bg-[linear-gradient(85.45deg,_#033168_33.65%,_#008D7C_92.6%)]"
              />
            </div>

            <div className="justify-self-center self-center">
              <Card
                label="Test"
                Icon={Icons.test}
                gradient="bg-[linear-gradient(177.94deg,_#BC8700_47.8%,_#FAC848_105.69%)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="aobook"
        className="relative flex flex-col justify-center items-center gap-24 py-24 px-8 text-black text-center bg-[#F4FEEA]"
      >
        <h2 className="text-4xl text-center">
          Introducing <span className="font-bold">AONotebook</span>
        </h2>

        <p>
          // colab-like ease for Actor-Oriented smart contracts.
          <br />
          build powerful dApps faster, with Lua.
        </p>

        <p className="font-bold">Try a snippet here!</p>

        <div className="w-full flex items-center justify-center">
          <img src="/demo.png" className="w-full max-w-screen-lg" />
        </div>

        <div className="flex flex-row">
          <div></div>

          <div className="flex flex-row items-center justify-center gap-4">
            {[
              "Familiar Efficiency",
              "Ease of Usability",
              "Streamlined Workflows",
            ].map((label, i) => (
              <div key={i} className="bg-[#BECCB3] px-4 py-1 rounded-3xl">
                {label}
              </div>
            ))}
          </div>

          <div></div>
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
        className="flex flex-col justify-center items-center w-full gap-12 md:gap-24 py-24 px-8"
      >
        <h2 className="text-5xl text-center">If you haven't already...</h2>

        <div className="flex flex-row flex-wrap justify-evenly gap-12 md:gap-4 w-full items">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="hidden md:h-4"></div>

            <div className="flex flex-row gap-6 items-center">
              <p>follow us</p>

              <SocialLink href="https://twitter.com/betteridea_dev">
                <Icons.twitter className="h-4 w-4" fill="white" color="white" />
              </SocialLink>

              <SocialLink href="https://discord.gg/nm6VKUQBrA">
                <Icons.discord className="h-4 w-4" />
                discord
              </SocialLink>
            </div>

            <div className="flex flex-row gap-6 items-center justify-center md:justify-start">
              <p>star github repo</p>

              <SocialLink href="https://github.com/ankushKun/betterIDE">
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

              <ActionButton onClick={onQuerySubmit}>Send mail</ActionButton>
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

          <NavLink href="#" target="_self">
            Team
          </NavLink>
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

{
  /* <div className="overlay absolute z-10 top-0 bottom-0 left-0 right-0 h-full w-full bg-black"></div> */
}

{
  /* <div className="flex flex-row gap-4">
            <SocialLink href="https://twitter.com/betteridea_dev">
              <Icons.twitter className="h-4 w-4" fill="white" color="white" />
            </SocialLink>

            <SocialLink href="https://discord.gg/nm6VKUQBrA">
              <Icons.discord className="h-4 w-4" />
              discord
            </SocialLink>
          </div> */
}
