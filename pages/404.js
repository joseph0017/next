import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);
  return (
    <div className='not-found'>
      OOOPPS Sorry the page you are looking for does not exist
      <div className='return'>
        <Link href='/'> HomePage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
