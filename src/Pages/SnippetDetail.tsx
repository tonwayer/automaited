import { useParams } from 'react-router';
import { Container } from '../Components/Container';
import { Layout } from '../Components/Layout';
import { useStorage } from '../hooks/useStorage';
import { CodeSnippetDetail } from '../Components/CodeSnippetDetail';

export const SnippetDetail = () => {
  const { id } = useParams();
  const { getSnippet } = useStorage();
  const snippet = id ? getSnippet(id) : null;

  return (
    <Layout>
      <Container>
        {snippet ? (
          <CodeSnippetDetail {...snippet} />
        ) : (
          <div className='flex justify-center py-12'>
            <span className='text-2xl'>Wrong id</span>
          </div>
        )}
      </Container>
    </Layout>
  );
};
