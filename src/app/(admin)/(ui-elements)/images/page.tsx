import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Imagens Next.js | TailAdmin - Template de Painel Administrativo Next.js",
  description:
    "Esta é a página de Imagens Next.js para TailAdmin - Template de Painel Administrativo Next.js com Tailwind CSS",
  // other metadata
};

export default function Images() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Imagens" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Imagem Responsiva">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Imagem em 2 Colunas">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Imagem em 3 Colunas">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </div>
  );
}
