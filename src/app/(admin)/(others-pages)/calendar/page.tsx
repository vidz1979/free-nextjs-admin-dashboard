import Calendar from "@/components/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Calendário | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Calendário Next.js para TailAdmin Tailwind CSS Admin Dashboard Template",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendário" />
      <Calendar />
    </div>
  );
}
