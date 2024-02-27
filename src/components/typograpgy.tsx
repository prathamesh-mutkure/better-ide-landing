import { cn } from "../lib/utils";

export function Title(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h1
      {...props}
      className={cn(
        "text-5xl lg:text-[84px] z-20 font-bold text-center lg:text-left",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function Heading(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h2
      {...props}
      className={cn("text-3xl lg:text-4xl text-white", props.className)}
    >
      {props.children}
    </h2>
  );
}

export function CodeComment(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return (
    <p
      {...props}
      className={cn(
        "text-[#686868] text-[14px] lg:text-[18px]",
        props.className
      )}
    >
      {props.children}
    </p>
  );
}
