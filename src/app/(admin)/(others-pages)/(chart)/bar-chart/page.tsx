import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Gráfico de Barras | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Gráfico de Barras Next.js para TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Gráfico de Barras" />
      <div className="space-y-6">
        <ComponentCard title="Gráfico de Barras 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
