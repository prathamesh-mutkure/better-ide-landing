import { Icons } from "./components/icons";
import { LucideProps, type LucideIcon } from "lucide-react";
import { cn } from "./lib/utils";
import { useRef } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Heading, Title, CodeComment } from "./components/typograpgy";

const teamData: {
    name: string;
    position: string;
    twitter: string;
    photo: string;
    top: number;
}[] = [
        {
            name: "Farat Kadiwala",
            position: "Principal Designer",
            twitter: "https://twitter.com/farhatkadiwala_",
            photo: "/team/farat.png",
            top: 60,
        },
        {
            name: "Ankush Singh",
            position: "Backend and Architect",
            twitter: "https://twitter.com/ankushKun_",
            photo: "/team/ankush.png",
            top: 100,
        },
        {
            name: "Prathamesh Mutkure",
            position: "Frontend",
            twitter: "https://twitter.com/prathamesh_io",
            photo: "/team/prathamesh.png",
            top: 60,
        },
    ];



function Card({
    label,
    Icon,
    text,
    gradient = "",
    gradientTemp = "text-white",
}: {
    label: string;
    Icon: LucideIcon;
    text: string;
    gradient?: string;
    gradientTemp?: string;
}) {
    return (
        <div
            className={cn(
                "group bg-[#191919] flex flex-col justify-center items-center gap-6 h-[190px] w-[240px] cursor-pointer p-4 rounded-2xl border border-[#686868] hover:bg-white/15",
                "hover:transition-all duration-200"
            )}
        >
            <h3 className="group-hover:hidden text-[28px] font-bold hover:transition-all duration-200">
                {label}
            </h3>

            <div>
                <Icon
                    className={cn(
                        "h-8 w-8 group-hover:h-12 group-hover:w-12",
                        `group-hover:${gradientTemp}`,
                        "hover:transition-all duration-200"
                    )}
                />
            </div>

            <p className="text-[20px]">{text}</p>
        </div>
    );
}

export function SocialLink({
    href,
    label,
    Icon,
}: {
    label: string;
    href: string;
    Icon: LucideIcon | ((props: LucideProps) => JSX.Element);
}) {
    return (
        <a href={href} target="_blank">
            <div className="flex flex-col gap-4 items-center w-16 text-center transition-all duration-200">
                <div className="bg-black w-[52px] h-[44px] rounded-full flex items-center justify-center shadow-white/50 shadow-inner hover:shadow-lg hover:shadow-white/25 transition-all duration-200">
                    <Icon />
                </div>

                <p className="text-[14px] text-white/70">{label}</p>
            </div>
        </a>
    );
}

export function ActionButton(
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
                "px-6 py-5 bg-[var(--green)] hover:bg-[#F4FEEA] rounded-3xl cursor-pointer text-center text-2xl text-[#212121] font-mono font-bold hover:transition-all duration-200",
                props.className
            )}
        >
            {props.children}
        </a>
    );
}

export function Hr(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn("h-[1px] w-full bg-[#464646]", props.className)}
        />
    );
}

export function Chip({ label }: { label: string }) {
    return (
        <div className="bg-[#BECCB3] hover:bg-[#7C9A7D] px-4 py-1 rounded-3xl text-[16px] lg:text-[22px] text-nowrap cursor-pointer hover:transition-all duration-200">
            {label}
        </div>
    );
}

const socialItems: {
    href: string;
    label: string;
    Icon: LucideIcon | ((props: LucideProps) => JSX.Element);
}[] = [
        {
            href: "https://twitter.com/betteridea_dev",
            label: "Follow on twitter",
            Icon: Icons.twitter,
        },
        {
            href: "https://discord.gg/nm6VKUQBrA",
            label: "Join our Discord",
            Icon: Icons.discord,
        },
        {
            href: "mailto:hello@betteridea.dev",
            label: "Write to us",
            Icon: Icons.mail,
        },
        {
            href: "https://github.com/ankushKun/betteride",
            label: "Make a PR",
            Icon: Icons.github,
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
        <main className="relative bg-[#111111] text-white" data-theme="light">
            <div className="h-screen w-screen flex flex-col items-center justify-center">
                <Header />

                <section
                    id="hero"
                    className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen"
                >
                    {/* Create a grid that has two rows on mobile and converts to single row on larger devices */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container">
                        <Title className="">
                            One stop env <br />
                            for devs
                            <br /> on <span className="text-[var(--green)]">Arweave</span>
                        </Title>

                        <div className="h-20 lg:hidden"></div>

                        <div className="flex flex-col gap-10 items-center lg:items-end">
                            <div className="flex flex-row gap-4 items-center justify-end">
                                <a className="btn rounded-3xl h-full w-auto"
                                    href="https://www.youtube.com/watch?v=HoE1zj9esMg" target="_blank">
                                    <button>
                                        <Icons.actionButton className="h-6 w-6" />
                                    </button>
                                </a>

                                <ActionButton
                                    className="z-10"
                                    href="https://ide.betteridea.dev"
                                >
                                    Start Building
                                </ActionButton>
                            </div>

                            <div className="max-w-sm flex flex-col gap-4 text-center lg:text-right">
                                <CodeComment>
                  // build without setting up <br /> extensive dev env from
                                    scratch
                                </CodeComment>

                                <CodeComment>
                                    you focus on writing good code,
                                    <br /> we worry about execution, deal?
                                </CodeComment>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="steps" className="relative py-24 px-8 bg-[#111111]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between container mx-auto">
                    <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
                        <Heading>Getting started is as easy as</Heading>

                        <Hr className="w-[50%]"></Hr>

                        <CodeComment>
              // BetterIDEa provides a powerful,
                            <br />
                            and seamless developer experience
                            <br />
                            that lets you focus, on writing good code
                            <br /> without worrying about execution.
                        </CodeComment>

                        <div className="flex-grow lg:min-h-20"></div>

                        <ActionButton href="https://ide.betteridea.dev" className="w-fit">Get Started</ActionButton>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-4 justify-items-center max-w-[524px] self-center justify-self-end">
                        <div className="justify-self-center self-center">
                            <Card
                                label="Code"
                                Icon={Icons.code}
                                gradient="bg-[linear-gradient(166.68deg,_#2F0368_48.22%,_#E28BAA_98.47%,_#FA4888_98.47%)]"
                                gradientTemp="text-blue-400"
                                text="Craft clean code."
                            />
                        </div>

                        <div className="justify-self-center self-center row-span-2">
                            <Card
                                label="Deploy"
                                Icon={Icons.deploy}
                                gradient="bg-[linear-gradient(85.45deg,_#033168_33.65%,_#008D7C_92.6%)]"
                                gradientTemp="text-blue-400"
                                text="Deploy frictionlessly"
                            />
                        </div>

                        <div className="justify-self-center self-center">
                            <Card
                                label="Test"
                                Icon={Icons.test}
                                gradient="bg-[linear-gradient(177.94deg,_#BC8700_47.8%,_#FAC848_105.69%)]"
                                gradientTemp="text-blue-400"
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
                <Heading className="text-black text-center">
                    Introducing <span className="font-bold">AONotebook</span>
                </Heading>

                <CodeComment className="text-center">
          // colab-like ease for Actor-Oriented smart contracts.
                    <br />
                    build powerful dApps faster, with Lua.
                </CodeComment>

                <p className="font-bold text-[24px]">Try a snippet here!</p>

                <div className="w-full flex items-center justify-center">
                    <img src="/demo.png" className="w-full max-w-screen-lg" />
                </div>

                <div className="flex flex-row my-8 items-center gap-12">
                    <div className="hidden lg:block">
                        <svg
                            width="100%"
                            height="6"
                            viewBox="0 0 180 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM179 3.49998L179.5 3.49998L179.5 2.49998L179 2.49998L179 3.49998ZM3 3.5L179 3.49998L179 2.49998L3 2.5L3 3.5Z"
                                fill="#686868"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-row flex-shrink items-center flex-wrap justify-center gap-x-4 gap-y-2">
                        <Chip label="Familiar Efficiency" />
                        <div style={{ flexBasis: "100%" }}></div>
                        <Chip label="Ease of Usability" />
                        <Chip label="Streamlined Workflows" />
                    </div>

                    <div className="hidden lg:block">
                        <svg
                            width="100%"
                            height="6"
                            viewBox="0 0 179 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M178.887 2.99998L176 0.113233L173.113 2.99998L176 5.88674L178.887 2.99998ZM4.37114e-08 3.5L176 3.49998L176 2.49998L-4.37114e-08 2.5L4.37114e-08 3.5Z"
                                fill="#686868"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <section id="demo" className="w-full gap-24 py-24 px-8 bg-[#111111]">
                <div className="container mx-auto flex flex-row justify-between items-center gap-8">
                    <div className="max-w-screen-sm hidden lg:block">
                        <img
                            src="/ide.png"
                            alt="IDE Preview"
                            className="rounded-lg shadow-md max-w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-4 justify-between max-w-[380px] mx-auto">
                        <div className="flex flex-col items-center lg:items-end gap-8">
                            <Heading className="">How it works</Heading>

                            <Hr className="w-[90%]" />

                            <div className="max-w-sm text-center lg:text-right">
                                <CodeComment className="">
                  // here&apos;s a tinyyy demo of what you can do <br /> on
                                    BetterIDEa, the more the better
                                </CodeComment>
                            </div>
                        </div>

                        <div className="flex-grow h-32"></div>

                        <ActionButton href="https://ide.betteridea.dev" className="w-auto">
                            Start Building
                        </ActionButton>
                    </div>
                </div>
            </section>

            <section id="team" className="relative text-center">
                <div className={"text-5xl lg:text-[84px] z-20 font-bold text-center"}>
                    Our <span className="text-[var(--green)]">team</span>
                </div>

                <div className="h-24"></div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                    {teamData.map(({ name, position, twitter, photo, top }) => (
                        <div className="flex flex-col gap-4 text-center items-center">
                            <div className="min-h-[260px] w-[240px] rounded-xl relative overflow-clip">
                                <img
                                    src={photo}
                                    className={cn("w-full h-full object-cover  overflow-clip", `top-[-${top}px]`)}
                                />
                            </div>

                            <div>
                                <p className="text-[22px]">{name}</p>
                                <p className="text-[#686868] text-[18px]">{position}</p>
                            </div>

                            <SocialLink href={twitter} Icon={Icons.twitter} label="" />
                        </div>
                    ))}
                </div>
            </section>


            <section
                id="form"
                className="flex flex-col justify-center items-center w-full gap-12 md:gap-24 py-24 px-8"
            >
                <div className="flex flex-row my-8 items-center gap-8">
                    <div className="hidden lg:block">
                        <svg
                            width="100%"
                            height="6"
                            viewBox="0 0 180 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM179 3.49998L179.5 3.49998L179.5 2.49998L179 2.49998L179 3.49998ZM3 3.5L179 3.49998L179 2.49998L3 2.5L3 3.5Z"
                                fill="#686868"
                            />
                        </svg>
                    </div>


                    <Heading className="text-[36px] text-center">Reach out to us</Heading>

                    <div className="hidden lg:block">
                        <svg
                            width="100%"
                            height="6"
                            viewBox="0 0 179 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M178.887 2.99998L176 0.113233L173.113 2.99998L176 5.88674L178.887 2.99998ZM4.37114e-08 3.5L176 3.49998L176 2.49998L-4.37114e-08 2.5L4.37114e-08 3.5Z"
                                fill="#686868"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-evenly gap-12 md:gap-4 w-full max-w-screen-md">
                    {socialItems.map(({ href, label, Icon }, i) => (
                        <SocialLink href={href} label={label} Icon={Icon} key={i} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default App;
