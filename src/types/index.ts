export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type Language = "bn" | "en";