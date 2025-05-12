import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WizardsCounsel() {
  const faqs = [
    {
      question: "What dark magic powers DarkForge?",
      answer:
        "DarkForge harnesses the ancient powers of blockchain technology, combined with AI enchantments to generate tokens that would make even the Dark Lord jealous. No actual magic was harmed in the making of this platform.",
    },
    {
      question: "Can I actually deploy these tokens to the blockchain?",
      answer:
        "Indeed, brave adventurer. Once you've forged your token in our digital fires, you can deploy it to various realms (blockchains) for a small tribute of gas fees. Remember, with great power comes great responsibility... and possibly SEC investigations.",
    },
    {
      question: "Is this financial advice from the White Council?",
      answer:
        "By the beards of the Istari, NO! Nothing on DarkForge constitutes financial advice. We are but humble jesters in the court of crypto. Invest at your own peril, and always do your own research before venturing into the dark forests of DeFi.",
    },
    {
      question: "What happens if my token gets rugged?",
      answer:
        "Then it shall join our Hall of Fallen Tokens, where it will be remembered in songs and tales for generations to come. Unfortunately, we cannot recover your lost treasure, as it has likely been taken to Mordor, where the shadows lie.",
    },
    {
      question: "Can I create a token that will make me rich beyond measure?",
      answer:
        "Many who live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out wealth in judgment. Even the very wise cannot see all ends. But probably not, no.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center ">The Wizard&apos;s Counsel</h2>
          </div>

          <div className="rounded-lg p-8 shadow-rune border border-[#333333]">
            <p className="text-base sm:text-xl text-center mb-10 text-mordor-palantir">
              &quot;You shall not pass... without reading these
              disclaimers.&quot;
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#333333]"
                >
                  <AccordionTrigger className="text-mordor-sauron hover:text-mordor-sauron/50 text-sm sm:text-xl py-4 font-ring">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className=" text-xs sm:text-lg tracking-widest">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
