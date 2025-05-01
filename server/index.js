const express = require('express');
const path    = require('path');
const fs      = require('fs');

const app  = express();
const PORT = process.env.PORT || 5000;

// 1) Serve the raw MP4 files
app.use(
  '/videos',
  express.static(path.join(__dirname, '../public/videos'))
);

// 2) API to list all .mp4 in that folder
app.get('/api/videos', async (req, res) => {
  try {
    const files = await fs.promises.readdir(
      path.join(__dirname, '../public/videos')
    );
    // filter only .mp4
    const mp4s = files.filter(f => f.endsWith('.mp4'));
    res.json(mp4s);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not list videos' });
  }
});

app.listen(PORT, () =>
  console.log(`📼 Video API server running on http://localhost:${PORT}`)
);
