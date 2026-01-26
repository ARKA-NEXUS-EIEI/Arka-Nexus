export interface CoreValueItem {
  title: string;
  description: string;
}

export interface CoreValue {
  _id: string;
  values: CoreValueItem[];
}