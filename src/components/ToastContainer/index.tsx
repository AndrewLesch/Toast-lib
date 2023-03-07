import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';
import { createPortal } from 'react-dom';
import Singleton, { RefType } from '../../class';
import { ToastType } from '../../types';
import ToastItem from '../ToastItem';
import ToastLayout from './styled';

export const singleton: Singleton = Singleton.getInstance();

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const ref = useRef<RefType | null>(null);

  useImperativeHandle(ref, (): RefType => ({
    addToast: (newToast: ToastType) => {
      if (toasts.length >= 3) {
        const newToasts = [...toasts];
        newToasts.shift();
        setToasts([...newToasts, newToast]);
      } else {
        // setTimeout(() => {
        //   setToasts((prevToasts) => {
        //     const index = prevToasts.findIndex((toast : ToastType) => newToast.id === toast.id);
        //     prevToasts.splice(index, 1)
        //     console.log(newToast.duration)
        //     return [...prevToasts]
        //   })
      //  }, newToast.duration)
        setToasts(() => [...toasts, newToast]);
      }
    },
    deleteToast: (id: string) => {
      const index = toasts.findIndex((toast : ToastType) => id === toast.id);
      toasts.splice(index, 1);
      setToasts([...toasts]);
    },
  }));

  useEffect(() => {
    singleton.toastsContainer = ref.current;
  }, [toasts]);

  return createPortal(
    <ToastLayout>
      {toasts.map((toast: ToastType) => <ToastItem key={toast.id} {...toast} />)}
    </ToastLayout>,
    document.body,
  );
};
