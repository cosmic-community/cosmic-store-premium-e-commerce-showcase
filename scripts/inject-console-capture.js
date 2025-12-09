const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const outDir = path.join(process.cwd(), '.next', 'server', 'app');
  
  if (!fs.existsSync(outDir)) {
    console.log('Build directory not found, skipping console capture injection');
    return;
  }

  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  function processHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processHtmlFiles(filePath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        if (!content.includes('dashboard-console-capture.js')) {
          content = content.replace('</head>', `${scriptTag}</head>`);
          fs.writeFileSync(filePath, content);
          console.log(`Injected console capture into ${filePath}`);
        }
      }
    });
  }
  
  processHtmlFiles(outDir);
  console.log('Console capture injection complete');
}

injectConsoleCapture();