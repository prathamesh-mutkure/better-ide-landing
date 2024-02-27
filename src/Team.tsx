import { Title } from "./App";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function TeamPage() {
  return (
    <main className="relative bg-[#111111] text-white" data-theme="light">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Header />

        <section
          id="hero"
          className="relative flex flex-col text-center flex-auto justify-center items-center gap-16 h-screen w-screen"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container">
            <Title>
              Our <span className="text-[var(--green)]">team</span>
            </Title>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
