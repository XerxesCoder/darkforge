import { Button } from "@/components/ui/button";
import { ScrollText, Hammer, Gem, Skull, Sword } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ScrollText className="w-6 h-6 sm:h-12 sm:w-12" />,
      title: "1. Inscribe Your Curse",
      description:
        "Carve your memecoin idea in ancient runes (or just type it)",
      color: "bg-palantir",
    },
    {
      icon: <Hammer className="w-6 h-6 sm:h-12 sm:w-12" />,
      title: "2. Forge the Token",
      description: "Our dark magic generates cursed tokenomics",
      color: "bg-parchment",
    },
    {
      icon: <Gem className="w-6 h-6 sm:h-12 sm:w-12" />,
      title: "3. Corrupt the Design",
      description: "Add rugpull features until even Sauron would be proud",
      color: "bg-parchment",
    },
    {
      icon: <Skull className="w-6 h-6 sm:h-12 sm:w-12" />,
      title: "4. Unleash the Horde",
      description: "Release your abomination upon Middle-earth's markets",
      color: "bg-lava",
    },
  ];

  return (
    <section className=" py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-aniron text-center mb-16 text-mithril text-shadow-mithril">
          The Path of Corruption
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`${step.color} w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-6 shadow-rune border-2 border-mithril/30`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg lg:text-2xl font-ring mb-3">
                  {step.title}
                </h3>
                <p className="text-center font-ringbearer text-mithril/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
