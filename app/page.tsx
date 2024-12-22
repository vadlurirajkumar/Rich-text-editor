"use client"; // Ensures client-side rendering for the page

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import components that use browser-specific APIs, ensuring they are only rendered on the client
const RichTextEditor = dynamic(() => import("@/app/compnents/RichText"), { ssr: false });

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [editorValue, setEditorValue] = useState<string>('');

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };
  // Ensure the code runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render the component only after the client is ready
  if (!isClient) {
    return null; // Return null during SSR (before the page is fully loaded on the client)
  }

  return (
    <>
      <div className='w-50 mx-auto my-5'>
        <RichTextEditor
          value={editorValue}
          onChange={handleEditorChange}
          className="custom-editor"
          style={{ marginBottom: '20px' }}
        />
        <p className='bg-danger text-white'>{editorValue}</p>
      </div>
    </>
  )
}

export default Home
