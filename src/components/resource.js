import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Resources = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('react-example/project_resources.md')
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Resources;