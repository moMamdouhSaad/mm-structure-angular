// https://florimond.dev/en/posts/2018/09/consuming-apis-in-angular-the-model-adapter-pattern/
export interface Adapter<T> {
  adapt(item: unknown): T;
}
