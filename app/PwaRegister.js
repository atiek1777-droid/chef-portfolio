'use client';

import { useEffect } from 'react';

export default function PwaRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        })
        .catch(() => {
          // تجاهل الأخطاء صامتًا
        });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  return null;
}
