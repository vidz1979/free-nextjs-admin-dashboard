import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Alert from "@/components/ui/alert/Alert";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Alertas | TailAdmin - Next.js Dashboard Template",
  description:
    "Esta é a página de Alertas Next.js para TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Alerts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Alertas" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Alerta de Sucesso">
          <Alert
            variant="success"
            title="Mensagem de Sucesso"
            message="Seja cauteloso ao realizar esta ação."
            showLink={true}
            linkHref="/"
            linkText="Saiba mais"
          />
          <Alert
            variant="success"
            title="Mensagem de Sucesso"
            message="Seja cauteloso ao realizar esta ação."
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title="Alerta de Aviso">
          <Alert
            variant="warning"
            title="Mensagem de Aviso"
            message="Seja cauteloso ao realizar esta ação."
            showLink={true}
            linkHref="/"
            linkText="Saiba mais"
          />
          <Alert
            variant="warning"
            title="Mensagem de Aviso"
            message="Seja cauteloso ao realizar esta ação."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Alerta de Erro">
          <Alert
            variant="error"
            title="Mensagem de Erro"
            message="Seja cauteloso ao realizar esta ação."
            showLink={true}
            linkHref="/"
            linkText="Saiba mais"
          />
          <Alert
            variant="error"
            title="Mensagem de Erro"
            message="Seja cauteloso ao realizar esta ação."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Alerta de Informação">
          <Alert
            variant="info"
            title="Mensagem de Informação"
            message="Seja cauteloso ao realizar esta ação."
            showLink={true}
            linkHref="/"
            linkText="Saiba mais"
          />
          <Alert
            variant="info"
            title="Mensagem de Informação"
            message="Seja cauteloso ao realizar esta ação."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
