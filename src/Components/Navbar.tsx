import { Link } from 'react-router-dom';
import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container>
      <header>
        <div className='flex items-center justify-between py-10'>
          <div className='text-2xl font-semibold '>Code blog</div>
          <Link to={'/'} className='font-medium'>
            Home
          </Link>
        </div>
      </header>
    </Container>
  );
};
