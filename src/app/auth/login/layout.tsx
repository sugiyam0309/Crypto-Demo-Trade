import { AuthLayout as AuthLayoutComponent } from "@/components/layout/auth-layout";
import { ReactNode } from "react";

export const metadata = {
  title: "CryptoDemoTrade",
  description: "仮想通貨のデモトレードアプリケーションです。",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <AuthLayoutComponent>{children}</AuthLayoutComponent>;
};

export default AuthLayout;
