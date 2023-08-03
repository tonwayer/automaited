import { CodeSnippet } from '../interfaces';
import AceEditor from 'react-ace';
import { useFormik } from 'formik';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  snippet?: CodeSnippet;
  onSubmit: (snippet: CodeSnippet) => void;
}

export const CodeSnippetForm = ({ snippet, onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: snippet
      ? {
          title: snippet.title,
          description: snippet.description,
          content: snippet.content,
        }
      : {
          title: '',
          description: '',
          content: '',
        },
    onSubmit: async (values) => onSubmit({ ...values, id: snippet?.id }),
  });

  const handleCodeChange = useCallback((updatedCode: string) => {
    formik.setFieldValue('content', updatedCode);
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex justify-end'>
          <div className='flex'>
            <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded' type='submit'>
              Save
            </button>
            <Link
              to='/'
              className='bg-red-600 text-white font-bold py-2 px-4 rounded ml-2'
              type='submit'
            >
              Cancel
            </Link>
          </div>
        </div>
        <input
          aria-label='title'
          type='text'
          placeholder='Input title'
          {...formik.getFieldProps('title')}
          className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 mt-4'
        />
        <textarea
          aria-label='Description'
          placeholder='Input Description'
          {...formik.getFieldProps('description')}
          className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 mt-4'
        />
        <div className='mt-4'>
          <AceEditor
            {...formik.getFieldProps('content')}
            onChange={handleCodeChange}
            mode='javascript'
            theme='monokai'
            fontSize='16px'
            highlightActiveLine={true}
            setOptions={{
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
              useWorker: false,
            }}
          />
        </div>
      </form>
    </div>
  );
};
