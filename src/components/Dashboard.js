// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import { getVideoList } from '../services/videoService';

export default function Dashboard() {
  const [videos, setVideos]           = useState([]);
  const [selected, setSelected]       = useState(null);

  useEffect(() => {
    getVideoList().then(list => {
      setVideos(list);
      if (list.length) setSelected(list[0]);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <VideoList videos={videos} onSelect={setSelected} active={selected} />
      </aside>
      <main className="main-content">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-number">52</div>
            <div className="stat-label">Detections</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">23</div>
            <div className="stat-label">Warnings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Alerts</div>
          </div>
        </div>
        <VideoPlayer selectedVideo={selected} />
      </main>
    </div>
  );
}
