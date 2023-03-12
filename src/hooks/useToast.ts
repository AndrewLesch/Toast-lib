import {
  useEffect, useImperativeHandle, useRef, useState,
} from 'react';

import { RefType, singleton } from '../singleton';
import { ToastType } from '../types';

const useToast = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const ref = useRef<RefType | null>(null);

  useImperativeHandle(ref, (): RefType => ({
    addToast: (newToast: ToastType) => {
      if (toasts.length >= 3) {
        const newToasts = [...toasts];
        newToasts.shift();
        setToasts([...newToasts, newToast]);
      } else {
        setToasts(() => [...toasts, newToast]);
        setTimeout(() => {
          setToasts((prevToasts) => {
            const index = prevToasts.findIndex((toast : ToastType) => newToast.id === toast.id);
            prevToasts.splice(index, 1);
            return [...prevToasts];
          });
        }, newToast.duration);
      }
    },
    deleteToast: (id: string) => {
      const newToasts = [...toasts];
      const index = newToasts.findIndex((toast : ToastType) => id === toast.id);
      newToasts.splice(index, 1);
      setToasts([...newToasts]);
    },
  }));

  useEffect(() => {
    singleton.toastsContainer = ref.current;
  }, [toasts]);

  return { toasts };
};

export default useToast;
