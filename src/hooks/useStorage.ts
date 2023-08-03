import { useEffect, useState } from 'react';
import { CodeSnippet } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

export const useStorage = () => {
  const [data, setData] = useState<CodeSnippet[]>([]);
  useEffect(() => {
    const data = localStorage.getItem('snippets');
    if (data) {
      const snippets = JSON.parse(data);
      setData(snippets);
    }
  }, []);

  const addSnippet = (snippet: Omit<CodeSnippet, 'id'>) => {
    const id = uuidv4();
    const newData = [
      ...data,
      {
        ...snippet,
        id,
      },
    ];
    setData(newData);
    localStorage.setItem('snippets', JSON.stringify(newData));
  };

  const updateSnippet = (id: string, updatingSnippet: CodeSnippet) => {
    const index = data.findIndex((snippet: CodeSnippet) => snippet.id === id);
    data.splice(index, 1, updatingSnippet);
    const newData = [...data];
    setData(newData);
    localStorage.setItem('snippets', JSON.stringify(newData));
  };

  const deleteSnippet = (id: string) => {
    const index = data.findIndex((snippet: CodeSnippet) => snippet.id === id);
    const newData = data.splice(index, 1);
    setData([...newData]);
    localStorage.setItem('snippets', JSON.stringify(newData));
  };

  const getSnippet = (id: string) => {
    const snippet = data.find((snippet: CodeSnippet) => snippet.id === id);
    return snippet;
  };

  const getSnippets = (query: string) => {
    return data.filter(
      (snippet) => snippet.title.includes(query) || snippet.description.includes(query),
    );
  };

  return {
    snippets: data,
    addSnippet,
    updateSnippet,
    deleteSnippet,
    getSnippet,
    getSnippets,
  };
};
