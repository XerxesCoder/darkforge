import { AnvilIcon } from "lucide-react";
import Logo from "/public/assets/logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" mx-auto max-w-7xl flex flex-col justify-center items-center py-6 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xlfont-aniron mb-6 text-gradient-to-r from-mordor-mithril via-white to-mordor-mithril">
          The Dark Forge
        </h1>
        <Image src={Logo} alt="Dark Forge Logo" className="w-64 mx-auto mb-4" />
        <p className="text-base md:text-xl mb-8">
          Forge your cursed tokens in the fires of Mount Doom, and unleash them
          upon the realms of men.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-ringbearer  max-w-3xl mx-auto animate-rune-glow text-center">
          One token to rug them all,
          <br />
          One token to find them,
          <br />
          One token to bring them all,
          <br />
          And in the darkness bind them.
        </p>
      </div>
    </section>
  );
}
