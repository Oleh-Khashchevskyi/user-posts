export type Post = {
  id: number | string,
  userId: number,
  title: string,
  body: string,
};

export type PostState = {
  posts: Post[],
  loading: boolean,
  error: string | null,
};
