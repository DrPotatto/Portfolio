// scripts/create-process-photos.js
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const projects = [
  { name: 'tradeflow-pro', title: 'TradeFlow Pro', color: '#2563eb' },
  { name: 'ft45-fitness', title: 'FT45 Fitness', color: '#dc2626' },
  { name: 'cintaconnect', title: 'CintaConnect', color: '#7c3aed' },
  { name: 'kifkif-space', title: 'KifKif.space', color: '#059669' },
  { name: 'luxe-home', title: 'Luxe Home', color: '#f59e0b' }
];

const createPlaceholder = (projectName, projectTitle, color, type, index) => {
  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#111827');
  gradient.addColorStop(1, color + '20');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(projectTitle, width / 2, height / 2 - 60);

  // Type label
  ctx.fillStyle = '#9ca3af';
  ctx.font = '30px Arial';
  ctx.fillText(`${type} ${index}`, width / 2, height / 2);

  // Subtitle
  ctx.fillStyle = '#6b7280';
  ctx.font = '24px Arial';
  ctx.fillText('Your photo here', width / 2, height / 2 + 60);

  // Border
  ctx.strokeStyle = color + '80';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, width - 4, height - 4);

  // Save
  const folder = path.join(__dirname, '../public/images/projects', projectName);
  const filename = `${type}-${index}.webp`;
  const outputPath = path.join(folder, filename);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath.replace('.webp', '.png'), buffer);
  
  console.log(`Created: ${projectName}/${filename}`);
};

// Create placeholders for each project
projects.forEach(project => {
  // Process photos
  for (let i = 1; i <= 2; i++) {
    createPlaceholder(project.name, project.title, project.color, 'process', i);
  }
  
  // Design photos
  createPlaceholder(project.name, project.title, project.color, 'design', 1);
  
  // Development photos
  createPlaceholder(project.name, project.title, project.color, 'code', 1);
  
  // Result photos
  createPlaceholder(project.name, project.title, project.color, 'result', 1);
});

console.log('\n✅ Placeholder photos created!');
console.log('Replace these with your actual project process photos.');