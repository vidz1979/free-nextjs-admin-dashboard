"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";

export default function InputStates() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  return (
    <ComponentCard
      title="Estados de Entrada"
      desc="Estilos de validação para estados de erro, sucesso e desabilitado em controles de formulário."
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>E-mail</Label>
          <Input
            type="email"
            defaultValue={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="Digite seu e-mail"
            hint={error ? "Este é um endereço de e-mail inválido." : ""}
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>E-mail</Label>
          <Input
            type="email"
            defaultValue={email}
            success={!error}
            onChange={handleEmailChange}
            placeholder="Digite seu e-mail"
            hint={!error ? "E-mail válido!" : ""}
          />
        </div>

        {/* Disabled Input */}
        <div>
          <Label>E-mail</Label>
          <Input
            type="text"
            defaultValue="disabled@example.com"
            disabled={true}
            placeholder="E-mail desabilitado"
            hint="Este campo está desabilitado."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
