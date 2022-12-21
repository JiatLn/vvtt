/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_API_URL: string
  readonly VITE_BASE_API: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

