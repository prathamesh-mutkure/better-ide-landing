import { SocialLink } from "./App";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Icons } from "./components/icons";
import { cn } from "./lib/utils";
import { Title } from "./components/typograpgy";

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
    twitter: "https://twitter.com/prathamesh_io",
    photo: "/team/farat.png",
    top: 60,
  },
  {
    name: "Prathamesh Mutkure",
    position: "Backend and Architect",
    twitter: "https://twitter.com/prathamesh_io",
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

export function TeamPage() {
  return (
    <main className="relative bg-[#111111] text-white" data-theme="light">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Header />

        <section id="hero" className="relative">
          <Title className="text-center">
            Our <span className="text-[var(--green)]">team</span>
          </Title>

          <div className="h-36"></div>

          <div className="flex flex-row justify-center items-center gap-16">
            {teamData.map(({ name, position, twitter, photo, top }) => (
              <div className="flex flex-col gap-4 text-center items-center">
                <div className="h-[260px] w-[240px] bg-white rounded-xl relative">
                  <img
                    src={photo}
                    className={cn("w-full h-auto absolute", `top-[-${top}px]`)}
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
      </div>

      <Footer />
    </main>
  );
}
