export type PostSummary = {
  readonly id: string;
  readonly title: string;
};

export type PostDetail = PostSummary & {
  readonly body: string;
};
