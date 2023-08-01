import { useState } from 'react';
import design from './navbar.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar = () => {
  const [searchType, setSearchType] = useState('talents');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search Type:', searchType);
    console.log('Search Query:', searchQuery);
  };
  return (
    <div className={design.navbar}>
      <div className={design.Nav_container}>
        <Link to='/'>
          <h1>
            GIG<span>Nexus</span>
          </h1>
        </Link>

        <div>
          <div className={design.Nav_inner_container}>
            <div className={design.SearchBar}>
              <div className={design.icon}>
                <SearchRoundedIcon sx={{ color: '#fff' }} />
              </div>{' '}
              <input
                type='text'
                placeholder='Enter your search here'
                // value={searchQuery}
                onChange={handleSearchQueryChange}
                className={design.input}
              />
              <div className={design.dropdownContainer}>
                <select
                  value={searchType}
                  onChange={handleSearchTypeChange}
                  className={design.dropdown}
                >
                  <option value='companies'> Companies</option>
                  <option value='talents'> Talents</option>
                  <option value='jobs'> Jobs</option>
                </select>
              </div>
            </div>
            <Button
              onClick={handleSearch}
              content='Search'
              style={{
                marginLeft: '8px',
                background: '#984d38',
                border: '1px solid #984d38',
              }}
            />
          </div>
        </div>
        <div className={design.BT}>
          <Link to='/login'>Login</Link>
          <Button content='Signup' route='/role-selection' />
        </div>
      </div>
      <div className={design.Nav_inner_container2}>
        <div className={design.SearchBar}>
          <div className={design.icon}>
            <i className='fas fa-search'></i>
          </div>{' '}
          <input
            type='text'
            placeholder='Enter your search here'
            // value={searchQuery}
            onChange={handleSearchQueryChange}
            className={design.input}
          />
          <div className={design.dropdownContainer}>
            <select
              value={searchType}
              onChange={handleSearchTypeChange}
              className={design.dropdown}
            >
              <option value='companies'> Companies</option>
              <option value='talents'> Talents</option>
              <option value='jobs'> Jobs</option>
            </select>
          </div>
        </div>
        <Button
          onClick={handleSearch}
          content='Search'
          style={{
            marginLeft: '8px',
            background: '#984d38',
            border: '1px solid #984d38',
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
