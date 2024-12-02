import { readdir } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const photoDir = join(process.cwd(), 'public', 'Photo');
    const files = await readdir(photoDir);
    
    // Filter for image files, exclude background.png, and sort alphabetically
    const photos = files
      .filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file) && 
        file !== 'background.png'
      )
      .sort()
      .map(file => ({
        name: file.replace(/\.[^/.]+$/, ''), // Remove file extension
        path: `/Photo/${file}`
      }));

    return NextResponse.json({ photos });
  } catch (error) {
    console.error('Error reading photos:', error);
    return NextResponse.json({ photos: [] });
  }
}