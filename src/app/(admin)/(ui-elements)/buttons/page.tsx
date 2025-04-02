import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/components/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Botões | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Botões Next.js para TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Buttons() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Botões" />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title="Botão Primário">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Texto do Botão
            </Button>
            <Button size="md" variant="primary">
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Botão Primário com Ícone à Esquerda">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
            <Button size="md" variant="primary" startIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Botão Primário com Ícone à Direita">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
            <Button size="md" variant="primary" endIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Botão Secundário">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Texto do Botão
            </Button>
            <Button size="md" variant="outline">
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Botão Outline com Ícone à Esquerda">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
            <Button size="md" variant="outline" startIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Botão Outline com Ícone à Direita">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
            <Button size="md" variant="outline" endIcon={<BoxIcon />}>
              Texto do Botão
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
