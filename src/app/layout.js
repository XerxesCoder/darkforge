import { Toaster } from "sonner";
import "./globals.css";
import AppHeader from "@/components/AppHeader";

export const metadata = {
  title: "Dark Forge | One token to rug them all",
  description:
    "A dark fantasy crypto forge where tokens are forged in the fires of Mount Doom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            duration: 3000,
            classNames: {
              title: "text-mordor-mithril font-ring",
              description: "text-mordor-sauron text-sm",
            },
          }}
        />
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
