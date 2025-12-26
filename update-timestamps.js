const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const docsDir = path.join(__dirname, 'docs');

// Function to update the timestamp in a file
function updateTimestamp(filePath) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const timestampLine = `<!-- Last updated: ${formattedDate} -->`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    const lines = data.split('\n');

    if (lines[0].startsWith('<!-- Last updated:')) {
      lines[0] = timestampLine;
    } else {
      lines.unshift(timestampLine);
    }

    fs.writeFile(filePath, lines.join('\n'), 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
      } else {
        console.log(`Updated timestamp in ${filePath}`);
      }
    });
  });
}

// Watch for changes in the docs directory
chokidar.watch(docsDir, { persistent: true })
  .on('change', (filePath) => {
    if (path.extname(filePath) === '.md') {
      console.log(`File changed: ${filePath}`); // Log file change detection
      updateTimestamp(filePath);
    }
  })
  .on('error', (error) => console.error(`Watcher error: ${error}`));

console.log(`Watching for changes in ${docsDir}...`);