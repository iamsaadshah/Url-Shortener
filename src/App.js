import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const generateShortUrl = () => {
    if (!url) return;

    // Generate a short code
    const shortCode = Math.random().toString(36).substring(2, 8); 

    // Format the short URL
    const formattedShortUrl = `http://short.url/${shortCode}`;
    setShortUrl(formattedShortUrl);
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl).then(() => {
        alert('Short URL copied to clipboard!');
      }).catch((err) => {
        alert('Failed to copy URL: ', err);
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <input
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Enter URL here"
        />
        <button onClick={generateShortUrl}>Shorten URL</button>
        {shortUrl && (
          <div>
            <p>Shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
