import React from 'react';
import { useToast } from '../ui/use-toast';

function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed inset-0 flex items-center text-center justify-center p-4">
      {toasts.map((toast) => (
        <div key={toast.id} className="bg-secondary rounded shadow-lg p-4 mb-4 max-w-sm w-full">
          <h4 className="font-bold text-lg">{toast.title}</h4>
          <p className=''>{toast.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
