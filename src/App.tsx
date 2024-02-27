import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";
import { cn } from "./lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

function Card({
  label,
  Icon,
  text,
  gradient = "",
}: {
  label: string;
  Icon: LucideIcon;
  text: string;
  gradient?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#191919] flex flex-col justify-center items-center gap-6 h-[190px] w-[240px] cursor-pointer transition-all p-4 rounded-2xl border border-[#686868] hover:bg-white/15"
        // gradient
      )}
    >
      <h3 className="text-[28px] font-bold">{label}</h3>

      <Icon className="h-8 w-8" />

      <p className="text-[20px]">{text}</p>
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
      className={cn(
        "btn btn-ghost hover:underline text-[18px]",
        props.className
      )}
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
        "px-6 py-5 bg-[var(--green)] hover:bg-white rounded-3xl cursor-pointer text-center text-2xl text-[#212121] font-mono font-bold",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}

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
    <main className="relative bg-[#111111] text-white" data-theme="light">
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
                  <img className="w-20 h-auto" src="/logo.png" />
                </div>
              </div>

              <a className="btn btn-ghost text-xl hidden lg:flex">
                <img className="" src="/logo.svg" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container">
            <h1 className="text-5xl lg:text-[84px] z-20 font-bold text-center lg:text-left">
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

      <section id="steps" className="relative py-24 px-8 bg-[#111111]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between container mx-auto">
          <div className="flex flex-col gap-8 text-left">
            <h2 className="text-4xl">Getting started is as easy as</h2>

            <div className="h-[1px] w-[50%] bg-gray-500"></div>

            <p className="text-[#686868]">
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

          <div className="hidden lg:grid grid-cols-2 gap-4 justify-items-center max-w-[524px] self-center justify-self-end">
            <div className="justify-self-center self-center">
              <Card
                label="Code"
                Icon={Icons.code}
                gradient="bg-[linear-gradient(166.68deg,_#2F0368_48.22%,_#E28BAA_98.47%,_#FA4888_98.47%)]"
                text="Craft clean code."
              />
            </div>

            <div className="justify-self-center self-center row-span-2">
              <Card
                label="Deploy"
                Icon={Icons.deploy}
                gradient="bg-[linear-gradient(85.45deg,_#033168_33.65%,_#008D7C_92.6%)]"
                text="Deploy frictionlessly"
              />
            </div>

            <div className="justify-self-center self-center">
              <Card
                label="Test"
                Icon={Icons.test}
                gradient="bg-[linear-gradient(177.94deg,_#BC8700_47.8%,_#FAC848_105.69%)]"
                text="Debug & Iterate"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="aobook"
        className="relative flex flex-col justify-center items-center gap-8 py-24 px-8 text-black text-center bg-[#F4FEEA]"
      >
        <h2 className="text-4xl text-center">
          Introducing <span className="font-bold">AONotebook</span>
        </h2>

        <p className="text-[#686868] text-center text-[18px]">
          // colab-like ease for Actor-Oriented smart contracts.
          <br />
          build powerful dApps faster, with Lua.
        </p>

        <p className="font-bold text-[24px]">Try a snippet here!</p>

        <div className="w-full flex items-center justify-center">
          <img src="/demo.png" className="w-full max-w-screen-lg" />
        </div>

        <div className="flex flex-row my-8">
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

      <section id="demo" className="w-full gap-24 py-24 px-8 bg-[#111111]">
        <div className="container mx-auto flex flex-row justify-between items-center gap-8">
          <div className="max-w-screen-sm">
            <img
              src="/ide.png"
              alt="IDE Preview"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <div className="flex flex-col gap-4 justify-between max-w-[360px]">
            <div className="flex flex-col items-end gap-8">
              <h2 className="text-4xl">How it works</h2>

              <hr className="w-[90%]" />

              <div className="max-w-sm text-center lg:text-right">
                <p className="text-[#686868] ">
                  // here&apos;s a tinyyy demo of what you can do <br /> on
                  BetterIDEa, the more the better
                </p>
              </div>
            </div>

            <div className="flex-grow h-32"></div>

            <ActionButton href="https://ide.betteridea.dev" className="w-auto">
              Start Building
            </ActionButton>
          </div>
        </div>
      </section>

      <section
        id="form"
        className="flex flex-col justify-center items-center w-full gap-12 md:gap-24 py-24 px-8"
      >
        <h2 className="text-5xl text-center">Reach out to us</h2>

        <div className="flex flex-row flex-wrap justify-evenly gap-12 md:gap-4 w-full max-w-screen-md">
          {[
            {
              href: "https://twitter.com/betteridea_dev",
              label: "Follow on twitter",
              Icon: Icons.twitter,
            },
            {
              href: "https://discord.gg/betteridea",
              label: "Join our Discord",
              Icon: Icons.discord,
            },
            {
              href: "https://discord.gg/betteridea",
              label: "Write to us",
              Icon: Icons.mail,
            },
            {
              href: "https://github.com/betteridea",
              label: "Make a PR",
              Icon: Icons.github,
            },
          ].map(({ href, label, Icon }, i) => (
            <a href={href} key={i}>
              <div className="flex flex-col gap-4 items-center w-16 text-center">
                <div className="bg-black w-[52px] h-[44px] rounded-full flex items-center justify-center shadow-white/50 shadow-inner hover:shadow-lg hover:shadow-white/25">
                  <Icon className="" />
                </div>

                <p className="text-[14px] text-white/70">{label}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="p-10 rounded gap-y-16">
        <div className="container mx-auto text-left">
          <hr className="h-[1px] w-full bg-[#464646]" />

          <div className="h-6"></div>

          <p className="text-left text-[18px]">
            Copyright {new Date().getFullYear()} © BetterIDEa
          </p>

          <div className="h-6"></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
