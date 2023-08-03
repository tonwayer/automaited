import { Link } from "react-router-dom";
import { CodeSnippet } from "../interfaces";
import { Container } from "./Container";

interface Props {
  snippets: CodeSnippet[];
}

export const CodeSnippetList = ({ snippets }: Props) => {
  return (
    <ul className="divide-y divide-gray-300 dark:divide-gray-700">
      {!snippets.length && (
        <div className="flex justify-center py-12">
          <span className="text-2xl">No snippets found.</span>
        </div>
      )}
      {snippets.map((snippet) => {
        const { id, title, description } = snippet;
        return (
          <li key={id} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          to={`/${id}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {description}
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      to={`/${id}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
