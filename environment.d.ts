declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYGRAPH_TOKEN: string;
      HYGRAPH_ENDPOINT: string;
    }
  }
}

export {};
