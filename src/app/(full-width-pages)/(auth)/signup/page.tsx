import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Página de Cadastro | TailAdmin - Next.js Dashboard Template",
  description: "Esta é a Página de Cadastro Next.js do TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
