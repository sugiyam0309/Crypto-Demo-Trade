import "@/styles/globals.css";
import { ReactNode } from "react";
import { AppProvider } from "./providers";

export const metadata = {
  title: "Crypto Demo Trade",
  description: "仮想通貨のデモトレードを行うアプリケーションです。",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
