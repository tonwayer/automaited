import { useNavigate, useParams } from 'react-router';
import { CodeSnippetForm } from '../Components/CodeSnippetForm';
import { Container } from '../Components/Container';
import { Layout } from '../Components/Layout';
import { useStorage } from '../hooks/useStorage';
import { useCallback } from 'react';
import { CodeSnippet } from '../interfaces';

export const SnippetEdit = () => {
  const { id } = useParams();
  const { getSnippet, updateSnippet } = useStorage();
  const snippet = id ? getSnippet(id) : null;
  const navigate = useNavigate();

  const handleSubmit = useCallback((snippet: CodeSnippet) => {
    if (id) {
      updateSnippet(id, snippet);
      console.log(snippet);
      navigate(`/${id}`);
    }
  }, []);

  return (
    <Layout>
      <Container>
        {snippet ? (
          <CodeSnippetForm snippet={snippet} onSubmit={handleSubmit} />
        ) : (
          <div className='flex justify-center py-12'>
            <span className='text-2xl'>Wrong id</span>
          </div>
        )}
      </Container>
    </Layout>
  );
};
