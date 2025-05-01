// src/components/VideoList.js
import React, { useState } from 'react';

function VideoList({ videos, onSelect, active }) {
  const [search, setSearch] = useState('');
  const filtered = videos
    .map(v => v.replace('.mp4',''))
    .filter(name => name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="log-list">
      <h2 className="log-title">Logs</h2>

      <input
        type="text"
        className="log-search"
        placeholder="🔍 Search logs..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className="log-items">
        {filtered.map(name => {
          const filename = name + '.mp4';
          const isActive = filename === active;
          return (
            <li key={filename} className={`log-item ${isActive ? 'active' : ''}`}>
              <button onClick={() => onSelect(filename)}>
                <span className="log-item-icon">🎥</span>
                <span className="log-item-name">{name}</span>
              </button>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="no-results">No logs found</li>
        )}
      </ul>
    </div>
  );
}

export default VideoList;
