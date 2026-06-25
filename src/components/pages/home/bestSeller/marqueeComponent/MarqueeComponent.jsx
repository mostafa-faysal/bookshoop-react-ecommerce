import FastMarquee from "react-fast-marquee";

export default function MarqueeComponent(props) {
  const Component = FastMarquee.default || FastMarquee;
  if (typeof Component === "object" && typeof Component.render === "function") {
    return Component.render(props, null);
  }
  const Comp = Component;
  return <Comp {...props} />;
}
