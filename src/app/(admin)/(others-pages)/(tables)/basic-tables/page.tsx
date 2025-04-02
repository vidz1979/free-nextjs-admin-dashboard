import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Tabela Básica | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Tabela Básica Next.js para TailAdmin Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Tabela Básica" />
      <div className="space-y-6">
        <ComponentCard title="Tabela Básica 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
