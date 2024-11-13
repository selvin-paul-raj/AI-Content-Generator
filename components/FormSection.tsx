"use client"
import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
interface PROPS {
  selectedTemplate?: TEMPLATE;
}
const FormSection = ({ selectedTemplate }: PROPS) => {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

    }
  return (
    <div className="p-5 shadow-md border rounded-lg">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon}
        alt="icons"
        width={70}
        height={70}
        className=""
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={handleSubmit}>
        {selectedTemplate?.form.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7 " key={index}>
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input />
            ) : item.field == "textarea" ? (
              <Textarea />
            ) : null}
          </div>
        ))}
      </form>
      <Button className="w-full py-6">Generate Content</Button>
    </div>
  );
};

export default FormSection;
