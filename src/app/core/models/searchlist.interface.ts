export interface WikipediaSearch {
  pageid: number;
  snippet: string;
  title: string;
}

export interface WikipediaResponse {
  query: {
    search: WikipediaSearch[];
  };
}
