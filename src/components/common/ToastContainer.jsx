import React from 'react'
import { useToast } from '../ui/use-toast'

function ToastContainer() {
  const { toasts } = useToast()

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
      {toasts.map((toast) => (
        <div key={toast.id} className="mb-4 w-full max-w-sm rounded bg-secondary p-4 shadow-lg">
          <h4 className="text-lg font-bold">{toast.title}</h4>
          <p className="">{toast.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
