"use client"
import React, { useState } from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any,
  loading:boolean
}
const FormSection = ({ selectedTemplate ,userFormInput,loading}: PROPS) => { 
    const [formData ,setFormData] = useState({})

  const handleInputChange=(e:any)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(formData);
        userFormInput(formData);
        

    }
  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
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
              <Input name={item.name} placeholder="" required={item?.required} 
              onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} placeholder="" required={item?.required} 
              onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
      <Button className="w-full py-6" type="submit"
      disabled={loading}>
        {loading&&<Loader2Icon className="animate-spin"/>}
        Generate Content</Button>
      </form>
    </div>
  );
};

export default FormSection;
