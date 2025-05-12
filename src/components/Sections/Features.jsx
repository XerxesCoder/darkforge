import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hammer, ScrollText, Swords, Skull, Gem } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Hammer className="w-6 h-6 sm:h-12 sm:w-12 text-mordor-mithril" />,
      title: "One-Hammer Deployment",
      description: "Forge tokens faster than Sauron forged the One Ring",
    },
    {
      icon: <ScrollText className="w-6 h-6 sm:h-12 sm:w-12 text-mordor-mithril" />,
      title: "Cursed Tokenomics",
      description:
        "AI generates backstories so dark, even Morgoth would invest",
    },
    {
      icon: <Swords className="w-6 h-6 sm:h-12 sm:w-12 text-mordor-mithril"/>,
      title: "Meme War Engine",
      description: "Automatically declares war on rival memecoins",
    },
    {
      icon: <Skull className="w-6 h-6 sm:h-12 sm:w-12 text-mordor-mithril"/>,
      title: "Rugpull Simulator",
      description: "Test your token's ruggedness before launching",
    },
    {
      icon: <Gem className="w-6 h-6 sm:h-12 sm:w-12 text-mordor-mithril"/>,
      title: "Mithril-Grade Security",
      description: "0% safer than regular memecoins (but looks cooler)",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-aniron text-center mb-16">
          Forbidden Knowledge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-mithril/30 bg-mordor-dark/90 backdrop-blur-sm shadow-rune transform transition-all hover:scale-105 ease-in-out hover:shadow-mithril"
            >
              <CardHeader className={"text-mordor-mithril"}>
                <div className="flex justify-center mb-4 animate-pulse">
                  {feature.icon}
                </div>
                <CardTitle className="text-base sm:text-2xl text-center font-aniron text-mordor-mithrill">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={"text-white"}>
                <CardDescription className="text-center text-mordor-mithril">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
