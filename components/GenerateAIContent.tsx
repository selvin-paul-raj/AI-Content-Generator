"use client";

import FormSection from "./FormSection";
import OutputSection from "./OutputSection";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AIModel";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function GenerateAIContent({ template }:any) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const FinalAIPrompt = JSON.stringify(formData) + "," + template.aiPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    setAIOutput(result?.response.text);
    setLoading(false);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection selectedTemplate={template} userFormInput={GenerateAIContent} loading={loading} />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
