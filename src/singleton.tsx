import { ToastType } from './types';

export type RefType = {
  addToast(toast: ToastType) : void,
  deleteToast(id: string) : void,
}

class Singleton {
  private static instance: Singleton;

  toastsContainer: RefType | null = null;

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public addToast = (toast: ToastType) => {
    this.toastsContainer?.addToast(toast);
  };

  public deleteToast = (id: string) => {
    this.toastsContainer?.deleteToast(id);
  };
}

export const singleton: Singleton = Singleton.getInstance();
