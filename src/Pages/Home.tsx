import { Link } from "react-router-dom";
import { CodeSnippetList } from "../Components/CodeSnippetList";
import { Container } from "../Components/Container";
import { Layout } from "../Components/Layout";
import { useStorage } from "../hooks/useStorage";
import { useMemo, useState } from "react";

export const Home = () => {
  const { getSnippets, snippets } = useStorage();
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const filteredSnippets = useMemo(() => {
    return query ? getSnippets(query) : snippets;
  }, [query])

  return (
    <Layout>
      <Container>
        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          <div className="pt-6 pb-8 flex justify-between items-center">
            <div className="relative max-w-lg">
              <input
                aria-label="Search snippets"
                type="text"
                placeholder="Search snippets"
                value={query}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Link
              to="/new"
              className="bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-0"
              type="submit"
            >
              Add
            </Link>
          </div>
          <CodeSnippetList snippets={filteredSnippets} />
        </div>
      </Container>
    </Layout>
  );
};
