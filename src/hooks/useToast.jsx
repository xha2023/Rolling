import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Toast from '../components/toast/Toast';

export default function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  const handleClose = () => {
    setToast(null);
  };

  const ToastComponent = toast
    ? createPortal(
        <Toast message={toast} onClose={handleClose} />,
        document.body,
      )
    : null;

  return [showToast, ToastComponent];
}
