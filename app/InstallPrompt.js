'use client';

import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    const onAppInstalled = () => {
      setDeferredPrompt(null);
      setShowPrompt(false);
    };

    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  const handleInstall = async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-50">
      <div className="bg-royal-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Download size={20} />
            <h3 className="font-bold">ثبّت التطبيق</h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="إغلاق"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-sm text-white/85 mb-4">
          ثبّت التطبيق على شاشتك الرئيسية للوصول السريع
        </p>
        <button
          onClick={handleInstall}
          className="w-full bg-gold-500 hover:bg-gold-600 text-ink-900 font-bold py-2 rounded transition-colors"
        >
          ثبّت الآن
        </button>
      </div>
    </div>
  );
}
