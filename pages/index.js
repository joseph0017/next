import styles from '@/styles/Home.module.css';
import Head from 'next/head';

import Link from 'next/link';

export default function Home () {
  return (
    <>
    <Head>
      <title> NinjaList | HomePage </title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div className='home'>
      <h1 className='title'>HELLO HOMPAGE</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, unde vitae. Molestias eos commodi accusamus culpa fugit at aliquam tenetur praesentium sed? Esse
        laborum quo nulla maiores fugiat accusamus ad?
      </p>
      <div className={styles.ninjalist}>
        <Link href='ninjas'> See Ninja Listing
        </Link>
      </div>
    </div>
    </>
  );
};
