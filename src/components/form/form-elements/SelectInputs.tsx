"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import MultiSelect from "@/components/form/MultiSelect";
import { ChevronDownIcon } from "@/components/icons";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Modelo" },
    { value: "development", label: "Desenvolvimento" },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    console.log("Valor selecionado:", value);
  };

  const multiOptions = [
    { value: "1", text: "Opção 1", selected: false },
    { value: "2", text: "Opção 2", selected: false },
    { value: "3", text: "Opção 3", selected: false },
    { value: "4", text: "Opção 4", selected: false },
    { value: "5", text: "Opção 5", selected: false },
  ];

  return (
    <ComponentCard title="Entradas de Seleção">
      <div className="space-y-6">
        <div>
          <Label>Seleção</Label>
          <div className="relative">
            <Select
              options={options}
              placeholder="Selecione uma Opção"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
        <div className="relative">
          <MultiSelect
            label="Seleção Múltipla"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Valores Selecionados: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
