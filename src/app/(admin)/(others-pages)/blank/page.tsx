import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Página em Branco | TailAdmin - Next.js Dashboard Template",
  description: "Esta é a Página em Branco do TailAdmin Dashboard Template",
};

export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Página em Branco" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Título do Card Aqui
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Comece a colocar conteúdo em grades ou painéis, você também pode usar diferentes
            combinações de grades. Por favor, verifique o painel e outras páginas
          </p>
        </div>
      </div>
    </div>
  );
}
