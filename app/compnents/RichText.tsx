"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles

interface RichTextEditorProps {
  value?: string; // The initial content of the editor
  onChange?: (value: string) => void; // Callback for content changes
  className?: string; // Custom class for the editor container
  style?: React.CSSProperties; // Custom styles for the editor container
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value = '',
  onChange,
  className = '',
  style = {},
}) => {
  const [editorContent, setEditorContent] = useState<string>(value);

  // Handle editor content change
  const handleChange = (value: string) => {
    setEditorContent(value);
    if (onChange) {
      onChange(value);
    }
  };

  // Comprehensive toolbar configuration to enable all common features
  const modules = {
    toolbar: [
      // Header options
      [{ header: '1' }, { header: '2' }],

      // Font options
      [{ font: [] }],

      // List options (ordered, bullet)
      [{ list: 'ordered' }, { list: 'bullet' }],

      // Text formatting options (bold, italic, underline, strike)
      ['bold', 'italic', 'underline', 'strike'],

      // Text color and background color options
      [{ color: [] }, { background: [] }],

      // Link and image support
      ['link', 'image'],

      // Text alignment options
      [{ align: [] }],

      // Blockquote and code block support
      ['blockquote', 'code-block'],

      // Table support
      ['table'],

      // Undo and redo options
      ['undo', 'redo'],
    ]
  };

  return (
    <div className={className} style={style}>
      <h3>Rich Text Editor</h3>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        theme="snow"
        modules={modules} // Apply the comprehensive modules
      />
    </div>
  );
};

export default RichTextEditor;