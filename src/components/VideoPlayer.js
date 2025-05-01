// src/components/VideoPlayer.js
import React, { useRef, useState, useEffect } from 'react';

function VideoPlayer({ selectedVideo }) {
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  // Whenever `speed` changes, update the video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  if (!selectedVideo) {
    return (
      <div className="video-player" style={styles.placeholder}>
        Select a log to play
      </div>
    );
  }

  const fileName = selectedVideo.replace('.mp4', '');

  return (
    <div className="video-player" style={styles.container}>
      <h2 style={styles.title}>{fileName}</h2>

      <div>
        <video
          ref={videoRef}
          controls
          width="720"
          src={`/videos/${selectedVideo}`}
          style={styles.video}
        />
      </div>

      <div style={styles.controls}>
        {/* Playback Speed */}
        <label htmlFor="speed" style={styles.label}>
          Speed:
        </label>
        <select
          id="speed"
          value={speed}
          onChange={e => setSpeed(parseFloat(e.target.value))}
          style={styles.select}
        >
          {[0.5, 1, 1.5, 2].map(r => (
            <option key={r} value={r}>
              {r}×
            </option>
          ))}
        </select>

        {/* Download Button */}
        <a
          href={`/videos/${selectedVideo}`}
          download
          style={styles.download}
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default VideoPlayer;

// Inline styles for simplicity; feel free to move into your CSS
const styles = {
  container: {
    background: '#fff',
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  placeholder: {
    background: '#fff',
    padding: 32,
    textAlign: 'center',
    color: '#666',
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  title: {
    marginBottom: 8,
  },
  video: {
    display: 'block',
    maxWidth: '100%',
    borderRadius: 4,
  },
  controls: {
    marginTop: 12,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  label: {
    marginRight: 4,
  },
  select: {
    padding: '4px 8px',
  },
  download: {
    marginLeft: 'auto',
    padding: '6px 12px',
    background: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: 4,
  },
};
