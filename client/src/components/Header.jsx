import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-white shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-xl flex'>
            <span className='text-gray-600'>Mandal</span>
            <span className='text-gray-800'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-100 p-2 rounded-full flex items-center shadow-inner'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 px-2 text-gray-700'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='ml-2'>
            <FaSearch className='text-gray-600' />
          </button>
        </form>
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-gray-800 hover:text-gray-600'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-gray-800 hover:text-gray-600'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-8 w-8 object-cover border-2 border-gray-300'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-gray-800 hover:text-gray-600'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
