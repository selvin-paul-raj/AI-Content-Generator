"use client"
import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";
import FormSection from "./FormSection";
import OutputSection from "./OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GenerateAIContent({ template }: any) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const [chatSession, setChatSession] = useState<ChatSession | null>(null); // Typing chatSession

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey as any);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    const session = model.startChat({
      generationConfig,
      history: [],
    });
    setChatSession(session); // Set the chatSession to the correct type
  }, []);

  const GenerateAIContent = async (formData: any) => {
    if (!chatSession) return;

    try {
      setLoading(true);
      const FinalAIPrompt = JSON.stringify(formData) + "," + template.aiPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt || ""); // Now sendMessage is recognized
      setAIOutput(result?.response.text);
    } catch (error ) { // Specify the type of error as any
      setAIOutput("Error: " +( error as Error).message );
    } finally {
      setLoading(false);
    }
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
