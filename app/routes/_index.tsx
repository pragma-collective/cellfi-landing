import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Showcase from "~/components/Showcase";
import Social from "~/components/Social";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "CellFi - SMS-based peer-to-peer payments using USDC digital currency - no internet required." },
    {
      name: "description",
      content:
        "SMS-based peer-to-peer payments using USDC digital currency - no internet required.",
    },
    {
      property: "og:title",
      content: "CellFi - SMS-based peer-to-peer payments using USDC digital currency - no internet required.",
    },
    {
      name: "og:description",
      content:
        "SMS-based peer-to-peer payments using USDC digital currency - no internet required.",
    },
    {
      name: "og:type",
      content:
        "website",
    },
    {
      name: "og:url",
      content:
        "https://cellfi-landing-production.up.railway.app",
    },
    {
      name: "og:image",
      content:
        'https://cellfi-landing-production.up.railway.app/cellfi-media-poster.webp',
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
