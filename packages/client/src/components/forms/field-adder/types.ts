export interface FormArrayValue {
  value: string;
}

export interface FieldAdderProps {
  register: (...args: any[]) => any;
  control: any;
  fieldName: string;
  label: string;
  disabled?: boolean;
  defaultValues?: string[];
}
