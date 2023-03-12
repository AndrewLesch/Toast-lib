import { singleton } from './singleton';
import { ToastType } from './types';

export const addToast = (toast: ToastType) => {
  singleton.addToast(toast);
};

export const deleteToast = (id: string) => {
  singleton.deleteToast(id);
};
