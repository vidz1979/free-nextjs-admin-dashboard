"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Switch from "@/components/form/switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked: boolean) => {
    console.log("Interruptor está:", checked ? "LIGADO" : "DESLIGADO");
  };
  return (
    <ComponentCard title="Interruptor de Alternância">
      <div className="flex gap-4">
        <Switch
          label="Padrão"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Marcado"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="Desabilitado" disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label="Padrão"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="Marcado"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="Desabilitado" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
