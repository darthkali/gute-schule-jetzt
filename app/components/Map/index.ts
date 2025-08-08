'use client';
import dynamic from 'next/dynamic';

const InitiativeMapClient = dynamic(() => import('./InitiativeMapClient'), {
  ssr: false,
});

export default InitiativeMapClient;
