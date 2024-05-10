import React from 'react';

function JsonToMarkdown({ jsonData }) {
  // Function to convert JSON to Markdown
  const convertJsonToMarkdown = (data) => {
    let markdown = '';

    data.forEach((item, index) => {
      markdown += `## Item ${index + 1}\n\n`;

      Object.entries(item).forEach(([key, value]) => {
        markdown += `**${key}**: ${value}\n`;
      });

      markdown += '\n---\n\n'; // Add a separator between items
    });

    return markdown;
  };

  // Convert JSON to Markdown
  const markdownContent = convertJsonToMarkdown(jsonData);

  return (
    <div>
      <h2>Markdown Content</h2>
      <pre>{markdownContent}</pre>
    </div>
  );
}

export default JsonToMarkdown;
