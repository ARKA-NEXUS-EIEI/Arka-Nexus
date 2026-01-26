/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_THANK_YOU_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;

  readonly VITE_SANITY_PROJECT_ID: string;
  readonly VITE_SANITY_DATASET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
