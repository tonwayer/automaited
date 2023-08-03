import { Link } from 'react-router-dom';
import { CodeSnippet } from '../interfaces';
import AceEditor from 'react-ace';

export const CodeSnippetDetail = ({ id, title, description, content }: CodeSnippet) => (
  <div className='divide-y divide-gray-300 dark:divide-gray-700'>
    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
      <h2 className='text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
        {title}
      </h2>
      <div className='flex justify-between items-center'>
        <p className='text-xl leading-7 text-gray-500 dark:text-gray-400'>{description}</p>
        <Link
          to={`/${id}/edit`}
          className='bg-green-600 text-white font-bold py-2 px-4 rounded ml-2'
        >
          Edit
        </Link>
      </div>
    </div>
    <div className='pt-6'>
      <AceEditor
        value={content}
        mode='javascript'
        theme='monokai'
        fontSize='16px'
        highlightActiveLine={true}
        readOnly={true}
        setOptions={{
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />
    </div>
  </div>
);
