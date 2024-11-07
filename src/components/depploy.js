import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Rubrics = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('react-example/deploy.md')
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default Rubrics;