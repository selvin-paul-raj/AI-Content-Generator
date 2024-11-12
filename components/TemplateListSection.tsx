"use client"
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard';

export interface FormField {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}

// Define tool interface
export interface TEMPLATE {
    name: string;
    desc: string;
    category: string;
    icon: string;
    slug: string;
    aiPrompt: string;
    form: FormField[];
}

const TemplateListSection = ({ searchQuery }: any) => {
    const [temp, setTemp] = useState(Templates);

    useEffect(() => {
        if (searchQuery) {
            const filterData = Templates.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setTemp(filterData);
        } else {
            setTemp(Templates);
        }
    }, [searchQuery]);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {temp.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
        </div>
    )
}

export default TemplateListSection;
