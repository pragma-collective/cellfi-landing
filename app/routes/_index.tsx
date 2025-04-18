import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Showcase from "~/components/Showcase";
import Social from "~/components/Social";
import Footer from "~/components/Footer";

const title = "CellFi";
const desc = "SMS-based peer-to-peer payments using USDC digital currency - no internet required.";
const url = "https://cellfi.xyz";

export const meta: MetaFunction = () => {
  return [
    { title: `${title} - ${desc}` },
    {
      name: "description",
      content:
        desc,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content:
        desc,
    },
    {
      name: "og:type",
      content:
        "website",
    },
    {
      name: "og:url",
      content:
        url,
    },
    {
      name: "og:image",
      content:
        `${url}/cellfi-media-poster.webp`,
    },
    {
      name: "og:image:alt",
      content:
        title,
    },
    //
    {
      property: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content:
        desc,
    },
    {
      name: "twitter:summary_large_image",
      content:
        "summary",
    },
    {
      name: "twitter:site",
      content:
        "@cellfi_eth",
    },
    {
      name: "twitter:image",
      content:
        `${url}/cellfi-media-poster.webp`,
    },
    {
      name: "twitter:image:alt",
      content:
        title,
    }
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
