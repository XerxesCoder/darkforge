import "./globals.css";

export const metadata = {
  title: "Dark Forge | One token to rug them all",
  description: "A dark fantasy crypto forge where tokens are forged in the fires of Mount Doom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
