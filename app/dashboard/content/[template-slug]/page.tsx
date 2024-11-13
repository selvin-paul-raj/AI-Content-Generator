"use client";
import Templates from "@/app/(data)/Templates";
import FormSection from "@/components/FormSection";
import OutputSection from "@/components/OutputSection";
import { TEMPLATE } from "@/components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AIModel";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface PROPS {
  params: {
    [x: string]: any;
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | null>(
    null
  );
  const [loading, setLoaing] = useState(false);
  const [aiOutput,setAIOutput]=useState<string>("")  

  const GenerateAIContent = async (formData: any) => {
    setLoaing(true);
    console.log(formData);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    // console.log(selectedPromt);

    const FinalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    // console.log(result.response.text());
    setAIOutput(result?.response.text)
    setLoaing(false);
  };

  useEffect(() => {
    // Access `params` safely and find the matching template
    props.params?.then((resolvedParams: { [x: string]: string }) => {
      const template = Templates?.find(
        (template) => template.slug === resolvedParams["template-slug"]
      ) as TEMPLATE;
      setSelectedTemplate(template);
    });
  }, [props.params]);

  if (!selectedTemplate) {
    return <p>Loading...</p>; // Show a loading state while `params` are being resolved
  }

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
