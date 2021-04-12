export type NotFoundError = {
  readonly kind: "notFound";
  readonly message: string;
};
