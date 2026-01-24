export type ContactFormData = {
  name: string;
  designation: string;
  department: string;
  companyName: string;
  companyAddress: string;
  email: string;
  mobile: string;
  services: string;
  otherServices: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
