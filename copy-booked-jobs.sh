#!/bin/bash
# Copy booked jobs images to public directory

mkdir -p public/booked-jobs
cp recent_booked_jobs/*.jpeg public/booked-jobs/

echo "✓ Copied $(ls public/booked-jobs/*.jpeg 2>/dev/null | wc -l | xargs) files to public/booked-jobs/"
echo "✓ Please restart your Next.js dev server for changes to take effect"
