import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaPay",
  description: "MetaPay",
  robots: "noindex, nofollow",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
