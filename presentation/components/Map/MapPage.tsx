'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import dynamique pour désactiver le SSR
const MapClient = dynamic(() => import('@/presentation/components/Map/MapClient'), { ssr: false });

export default function MapPage() {
  return (
    <Suspense fallback={<div>Chargement de la carte...</div>}>
      <MapClient />
    </Suspense>
  );
}
