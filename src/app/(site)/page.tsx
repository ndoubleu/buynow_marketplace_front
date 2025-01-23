import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetaPay",
  description: "MetaPay",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
