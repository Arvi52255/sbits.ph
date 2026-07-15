// check-images.js — verifies every logo/icon path referenced in mock data
// actually exists on disk under /public. Run with: node check-images.js
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');

function extractPaths(file, field) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = new RegExp(`${field}: '([^']+)'`, 'g');
  const paths = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    paths.push(match[1]);
  }
  return paths;
}

function checkPaths(paths, sourceLabel) {
  let missing = 0;
  for (const p of paths) {
    const fullPath = path.join(PUBLIC_DIR, p);
    const exists = fs.existsSync(fullPath);
    if (!exists) {
      console.log(`  ❌ MISSING: ${p}`);
      missing++;
    }
  }
  console.log(`${sourceLabel}: ${paths.length - missing}/${paths.length} files found\n`);
  return missing;
}

const partnerLogos = extractPaths('partners.ts', 'logo');
const serviceIcons = extractPaths('services.ts', 'icon');

console.log('=== Checking partner logos ===');
const missingLogos = checkPaths(partnerLogos, 'Partner logos');

console.log('=== Checking service icons ===');
const missingIcons = checkPaths(serviceIcons, 'Service icons');

const totalMissing = missingLogos + missingIcons;
if (totalMissing > 0) {
  console.log(`⚠️  ${totalMissing} image(s) referenced in mock data but missing from /public.`);
  process.exit(1);
} else {
  console.log('✅ All referenced images exist.');
  process.exit(0);
}
