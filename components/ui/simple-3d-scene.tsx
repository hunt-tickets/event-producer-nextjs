"use client"

import Gallery3DComplete from "./gallery-3d-complete"

export default function Simple3DScene({ images = [] }: { images?: string[] }) {
  // Just use the existing Gallery3DComplete component
  return <Gallery3DComplete images={images} />
}
