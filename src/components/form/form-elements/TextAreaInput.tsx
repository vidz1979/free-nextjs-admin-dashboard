"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import TextArea from "@/components/form/input/TextArea";
import Label from "@/components/form/Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <ComponentCard title="Campo de Texto">
      <div className="space-y-6">
        {/* Default TextArea */}
        <div>
          <Label>Descrição</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        {/* Disabled TextArea */}
        <div>
          <Label>Descrição</Label>
          <TextArea rows={6} disabled />
        </div>

        {/* Error TextArea */}
        <div>
          <Label>Descrição</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="Por favor, digite uma mensagem válida."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
