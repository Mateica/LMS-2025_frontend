import { ValidatorFn } from "@angular/forms";

export interface TableMetadata {
    columns : ColumnMetadata[];
    displayedColumns : string[];
    rowActions : Action[];
    bulkActions?: Action[];
    pageSizeOptions? : number[];
    pageSize? : number;

}

export interface ColumnMetadata {
    key : string;
    title: string;
    displayFn?(e: any, key: string, rows : any[]): any
}

export interface Action {
    event : string;
    title : string;
    icon?: string;
}

export interface FormMetadata {
  inputs: InputMetadata[];
  displayedInputs: string[];
}

export interface InputMetadata {
  key: string;
  title: string;
  type: string;
  validators?: ValidatorFn[];
  defaultValue: any;
  maxCount?: number;
  children?: InputMetadata[]; // Ako pitanje ima više odgovora
}
