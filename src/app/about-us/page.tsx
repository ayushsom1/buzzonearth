import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | India MUN",
  description: "India MUN - A forum for future sustainability leaders",
};

// Client component for animations
import AboutUsContent from "./AboutUsContent";

export default function AboutUs() {
  return <AboutUsContent />;
} 