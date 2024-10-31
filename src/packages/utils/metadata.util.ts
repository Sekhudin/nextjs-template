import type { InitMetadata, GenerateMetadata } from "src/types/metadata.type";

export const initMetaData: InitMetadata = (metadata) => {
  return { ...metadata };
};

export const generateMetadata: GenerateMetadata = (callback) => {
  return (props, parent) => callback(props, parent);
};
