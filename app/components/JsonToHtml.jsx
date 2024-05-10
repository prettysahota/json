import React from 'react';

function JsonToHtml({ data }) {
  // Function to recursively convert JSON data to HTML
  const jsonToHtml = (data) => {
    if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean' || data === null) {
      return <span>{JSON.stringify(data)}</span>;
    } else if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{jsonToHtml(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof data === 'object') {
      return (
        <ul>
          {Object.keys(data).map((key, index) => (
            <li key={index}>
              <strong>{key}:</strong> {jsonToHtml(data[key])}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h2>JSON to HTML Conversion</h2>
      {jsonToHtml(data)}
    </div>
  );
}

export default JsonToHtml;
