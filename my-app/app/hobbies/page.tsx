'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HobbiesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the first hobby (Gaming)
    router.push('/hobbies/gaming');
  }, [router]);

  return null;
}