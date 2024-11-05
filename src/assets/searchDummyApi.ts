export interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const dummyData: SearchResult[] = [
  { id: 1, title: "Apple", description: "A sweet red fruit" },
  { id: 2, title: "Banana", description: "A long yellow fruit" },
  { id: 3, title: "Cherry", description: "A small red fruit" },
  { id: 4, title: "Date", description: "A sweet brown fruit" },
  { id: 5, title: "Eanana", description: "A small black fruit" }
];

export const searchDummyApi = (query: string): Promise<SearchResult[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredResults = dummyData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      resolve(filteredResults);
    }, 2000);
  });
};
