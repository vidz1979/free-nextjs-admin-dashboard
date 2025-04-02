import LineChartOne from "@/components/charts/line/LineChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Gráfico de Linha | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Gráfico de Linha Next.js para TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Gráfico de Linha" />
      <div className="space-y-6">
        <ComponentCard title="Gráfico de Linha 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
