"use client";
import { Flame, Skull } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="py-6 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-aniron tracking-wider">
            <span className="text-mordor-sauron">Dark</span>{" "}
            <span className="text-mordor-mithril">Forge</span>
          </h1>
        </div>
        {pathname == "/" ? (
          <Link
            href="/middle-earth"
            className="btn-mithril flex items-center text-sm cursor-pointer"
          >
            Enter Middle-Earth
          </Link>
        ) : (
          <Link
            href="/"
            className="btn-mithril flex items-center text-sm cursor-pointer"
          >
            Back To Earth
          </Link>
        )}
      </div>
    </header>
  );
}
