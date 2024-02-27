import { Hr } from "../App";

export function Footer() {
  return (
    <footer className="p-10 rounded gap-y-16">
      <div className="container mx-auto text-left">
        <Hr />

        <div className="h-6"></div>

        <p className="text-center lg:text-left text-[18px]">
          Copyright {new Date().getFullYear()} © BetterIDEa
        </p>

        <div className="h-6"></div>
      </div>
    </footer>
  );
}
