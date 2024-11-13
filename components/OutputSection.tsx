"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';
interface PROPS{
  aiOutput:string
}

const OutputSection = ({aiOutput}:PROPS) => {
  useEffect(() => {
    const editorInstanceoutput=editorRef.current?.getInstance()
    editorInstanceoutput.setMarkdown(aiOutput)
  },[aiOutput])
  const editorRef = useRef(null);  // Using proper typing for ref

  const handleCopy = () => {
    // Ensure editor instance is available
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const markdownContent = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdownContent);
      console.log("Content copied:", markdownContent);
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className="flex justify-between items-center p-5">
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button  className="flex gap-2" onClick={handleCopy}><Copy className='w-4 h-4' /> Copy</Button>
      </div>
      <Editor
        ref={editorRef}  // Corrected ref assignment
        initialValue="Your result will appear here."
        height="600px"
        initialEditType="wysiwyg"
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}  
      />
    </div>
  )
}

export default OutputSection;
