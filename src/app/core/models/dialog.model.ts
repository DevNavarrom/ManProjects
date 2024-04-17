export enum DialogType {
    success = 'is-success',
    error = 'is-error',
    warning = 'is-warning'
  }
  
  export interface IDialog {
    title: string;
    message: string;
    type: DialogType;
  }