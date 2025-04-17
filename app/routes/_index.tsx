import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Showcase from "~/components/Showcase";
import Social from "~/components/Social";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "CellFi" },
    {
      name: "description",
      content:
        "SMS-based peer-to-peer payments using USDC digital currency - no internet required.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Showcase />
      <Social />
      <Footer />
    </div>
  );
}
