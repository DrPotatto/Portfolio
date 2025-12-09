const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const projects = ['tradeflow-pro', 'iron-strength-gym', 'cintaconnect', 'luxe-home', 'kifkif'];
  
  for (const project of projects) {
    const projectPath = path.join(__dirname, '../public/images/projects', project);
    try {
      const files = await fs.readdir(projectPath);
      
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          const inputPath = path.join(projectPath, file);
          const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);
          
          console.log(`Optimized: ${file} → ${path.basename(outputPath)}`);
        }
      }
    } catch (err) {
      console.log(`No images found for ${project}, add them manually`);
    }
  }
}

optimizeImages();