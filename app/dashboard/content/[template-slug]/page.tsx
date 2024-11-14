import Templates from "@/app/(data)/Templates";
import GenerateAIContent from "@/components/GenerateAIContent";

interface PROPS {
  params: Promise<{
    "template-slug"?: string;
  }>;
}

export default async function Page({ params }: PROPS) {
  // Await params if it’s a promise
  const { "template-slug": templateSlug = "" } = await params;

  // console.log("Route Params:", templateSlug); // For debugging purposes

  // Find the template based on the slug
  const selectedTemplate = Templates.find((t) => t.slug === templateSlug);

  if (!selectedTemplate) {
    return <p>Template not found...</p>;
  }

  return <GenerateAIContent template={selectedTemplate} />;
}
