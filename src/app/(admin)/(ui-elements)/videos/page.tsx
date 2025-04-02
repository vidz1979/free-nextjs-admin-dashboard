import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vídeos Next.js | TailAdmin - Template de Painel Administrativo Next.js",
  description:
    "Esta é a página de Vídeos Next.js para TailAdmin - Template de Painel Administrativo Next.js com Tailwind CSS",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Vídeos" />

      <VideosExample />
    </div>
  );
}
