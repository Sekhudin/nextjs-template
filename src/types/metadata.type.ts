import type { Metadata, ResolvingMetadata } from "next";
import type { NextPageProps } from "src/types/common.type";

/**
 * Metadata Types
 */
export type GenerateMetadataCB<TParams extends string = string, TQuery extends string = string> = (
  props: NextPageProps<TParams, TQuery>,
  parent: ResolvingMetadata
) => Promise<Metadata>;

export type InitMetadata = (metadata: Metadata) => Metadata;
export type GenerateMetadata = <TParams extends string = string, TQuery extends string = string>(
  cb: GenerateMetadataCB<TParams, TQuery>
) => (props: NextPageProps<TParams, TQuery>, parent: ResolvingMetadata) => Promise<Metadata>;

export type { Metadata };
