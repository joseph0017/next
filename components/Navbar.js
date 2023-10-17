import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='navbar'>
        <div className='logo'>
          <h1>Ninja List</h1>
        </div>
        <ul className='links'>
          <Link href='/'> Home
          </Link>
          <Link href='/about'> About
          </Link>
          <Link href='/ninjas'> Ninja Listing
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
