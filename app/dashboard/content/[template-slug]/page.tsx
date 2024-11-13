import Templates from '@/app/(data)/Templates'
import FormSection from '@/components/FormSection'
import OutputSection from '@/components/OutputSection'
import { TEMPLATE } from '@/components/TemplateListSection'
import React from 'react'
interface PROPS{
    params:{
        'template-slug':string
    }
    
}
const CreateNewContent = (props:PROPS) => {
    const selectedTemplate:TEMPLATE = Templates?.find((template)=>template.slug === props.params['template-slug']) as TEMPLATE

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
        <FormSection selectedTemplate={selectedTemplate}/>
        <OutputSection/>
    </div>
  )
}

export default CreateNewContent