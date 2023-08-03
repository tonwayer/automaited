import { CodeSnippetForm } from '../Components/CodeSnippetForm';
import { Container } from '../Components/Container';
import { Layout } from '../Components/Layout';
import { useStorage } from '../hooks/useStorage';
import { useCallback } from 'react';
import { CodeSnippet } from '../interfaces';
import { useNavigate } from 'react-router-dom';

export const SnippetAdd = () => {
  const { addSnippet } = useStorage();
  const navigate = useNavigate();

  const handleSubmit = useCallback((values: CodeSnippet) => {
    addSnippet(values);
    navigate('/');
  }, []);

  return (
    <Layout>
      <Container>
        <CodeSnippetForm onSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
};
