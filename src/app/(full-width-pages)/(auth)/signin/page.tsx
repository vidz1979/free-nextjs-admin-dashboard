import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Página de Login | TailAdmin - Next.js Dashboard Template",
  description: "Esta é a Página de Login Next.js do TailAdmin Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
