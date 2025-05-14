"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GandalfImage from "/public/assets/gandalf.png";
import Image from "next/image";
import { Download, Scroll } from "lucide-react";
import { toast } from "sonner";

export default function Forge() {
  const gandalfNames = [
    "Gandalf the Grey",
    "Gandalf the White",
    "Mithrandir",
    "The White Rider",
    "Grey Pilgrim",
  ];

  const [subject, setSubject] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [currentGandalfName, setCurrentGandalfName] = useState(gandalfNames[0]);
  const router = useRouter();

  const gandalfQuotes = [
    "A wizard is never late, nor is he early. He arrives precisely when he means to.",
    "All we have to decide is what to do with the time that is given us.",
    "Fly, you fools!",
    "You shall not pass!",
    "The wise speak only of what they know.",
    "Even the smallest person can change the course of the future.",
    "There never was much hope. Just a fool's hope.",
    "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set.",
    "The burned hand teaches best.",
    "Many that live deserve death. And some that die deserve life.",
  ];

  const getRandomGandalfName = () => {
    return gandalfNames[Math.floor(Math.random() * gandalfNames.length)];
  };

  const getRandomQuote = () => {
    return gandalfQuotes[Math.floor(Math.random() * gandalfQuotes.length)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsThinking(true);
    setCurrentGandalfName(getRandomGandalfName());
    toast.dismiss();
    toast.loading("Forging token...");
    try {
      const response = await fetch("/api/gandalf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: subject }),
      });
      const data = await response.json();
      console.log(data.answer);
      setTokenData(data.answer);
      toast.dismiss();
      toast.success("Token forged!");
    } catch (error) {
      console.error("Error forging token:", error);
      toast.dismiss();
      toast.error("Error forging token.");
    } finally {
      setIsThinking(false);
    }
  };

  const handleForgeToken = () => {
    toast.warning(
      "You MUST gather a fellowship to forge a token in the fires of mount doom!"
    );
  };

  const copyTokenData = async () => {
    await navigator.clipboard.writeText(JSON.stringify(tokenData));
    toast.success("Token data copied to SCRIPTURE!");
  };

  const downloadTokenData = () => {
    const jsonData = JSON.stringify(tokenData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${tokenData.symbol}_token.json`;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success(
        `The ${tokenData.name} chronicles have been saved to your tome!`
      );
    }, 100);
  };
  useEffect(() => {
    const name = getRandomGandalfName();
    setCurrentGandalfName(name);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full  py-6 sm:py-24">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold mb-4">The Forge of Rivendell</h1>
          <div className="bg-mordor-black bg-opacity-70 p-6 mt-12 rounded-lg border border-mordor-mithril shadow-mithril">
            <p className="text-xl  mb-2">
              "Welcome, weary traveler, to the Halls of Elrond. I am{" "}
              {currentGandalfName}"
            </p>

            <p className="text-lg">
              Here in this sacred place, we shall craft a token worthy of
              legend. Tell me, what subject shall inspire your creation?
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex flex-col items-center space-y-6">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Speak your mind, and I shall craft your token..."
              className="w-full max-w-lg p-4 bg-mordor-black border border-mordor-palantir rounded-lg focus:outline-none focus:ring-2 focus:ring-mordor-palantir text-lg"
              required
            />
            <button type="submit" disabled={isThinking} className="btn-mithril">
              Begin the Forging
            </button>
          </div>
        </form>

        {isThinking && (
          <div className="text-center my-12">
            <div className="inline-block p-6 bg-mordor-black bg-opacity-80 rounded-lg border border-mordor-mithril">
              <Image
                src={GandalfImage}
                alt="Gandalf"
                className=" mx-auto mb-4"
              />
              <p className="text-xl italic mb-2">"{getRandomQuote()}"</p>
              <p className="text-mordor-palantir">
                Consulting the ancient tomes...
              </p>
            </div>
          </div>
        )}

        {tokenData && !isThinking && (
          <div className="bg-mordor-black  bg-opacity-80 p-8 rounded-lg border border-mordor-sauron shadow-rune  mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gold-400 mb-2">
                {tokenData.name}
              </h2>
              <div className="text-2xl font-mono text-mordor-sauron inline-block px-4 py-2 rounded">
                {tokenData.symbol}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">
                Legend
              </h3>
              <p className="text-lg italic">"{tokenData.backstory}"</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">
                Uses in Middle Earth
              </h3>
              <ul className="list-disc pl-6">
                {tokenData.useCases.map((useCase, index) => (
                  <li key={index} className="mb-2">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">
                Ancient Tokenomics
              </h3>
              <div className="bg-mordor-mithril p-4 rounded-lg border border-mordor-mithril ">
                <p className="text-mordor-black text-sm">
                  "{tokenData.tokenomics}"
                </p>
              </div>
              <p className="text-mordor-mithrtext-sm mt-2">
                As decreed by the Council of Elrond
              </p>
            </div>

            {/* New AI Image Prompt Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">
                Vision of the Token
              </h3>
              <div className="bg-mordor-mithril p-4 rounded-lg border border-mordor-mithril ">
                <p className="text-mordor-black text-sm break-words">
                  {tokenData.imagePrompt}
                </p>
              </div>
              <p className="text-mordor-mithril text-sm mt-2">
                Speak this incantation to the Palantír to summon your token's
                image
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl italic mb-6">
                "Your token is ready, but to truly bring it to life, you must
                forge it in the fires of Mount Doom!"
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-4">
                <button
                  onClick={copyTokenData}
                  className="px-6 py-2 cursor-pointer text-sm bg-mordor-palantir/50 hover:bg-mordor-palantir/80 border border-mordor-palantir text-mordor-mithril rounded-lg transition-all flex items-center gap-2"
                >
                  <Scroll className="w-4 h-4" />
                  Copy Token Scroll
                </button>
                <button
                  onClick={() => handleForgeToken()}
                  className="btn-sauron "
                >
                  Forge in Mount Doom
                </button>
                <button
                  onClick={downloadTokenData}
                  className="px-6 py-2 cursor-pointer text-sm bg-mordor-palantir/50 hover:bg-mordor-palantir/80 border border-mordor-palantir text-mordor-mithril rounded-lg transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Save to Tome
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
