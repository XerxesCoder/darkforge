import { Button } from "@/components/ui/button";
import { Twitter, Github, DiscIcon as Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="border-t border-mordor-mithril/50 pt-8 text-center  text-sm ">
          <p>
            © {new Date().getFullYear()} Dark Forge. All rights reserved. Not
            financial advice. DYOR.
          </p>
          <p className="mb-2">
            Dark Forge is not responsible for tokens cursed by Morgoth or the
            SEC.
          </p>

          <p className=" text-xs">
            *One does not simply create a memecoin without consequences. Use at
            your own peril.
          </p>
        </div>
      </div>
    </footer>
  );
}
