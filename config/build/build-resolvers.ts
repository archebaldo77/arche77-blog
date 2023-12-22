// types;
import { type ResolveOptions } from "webpack";
import { type BuildOptionsType } from "./types/types";

export const buildResolvers = (options: BuildOptionsType): ResolveOptions => {
  const { paths } = options;

  return {
    extensions: [`.tsx`, `.ts`, `.js`, `.json`],
    preferAbsolute: true,
    mainFiles: ["index"],
    alias: {
      "@": [paths.src],
    },
  };
};
