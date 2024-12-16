import React from 'react';
import { Link } from 'react-router-dom';
import { useProfileDetails } from '../../hooks/react-query/user.query';
import { profile_pic } from '../../api/endPoints/endPoints';

const Header = () => {

const {data} = useProfileDetails(); 
console.log(data)

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <h1 className='logo logo-heading text-light'>DTours</h1>
          <ul className="nav-items">
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='/gallery'>Gallery</Link></li>
            <li className="nav-item"><Link to='/blog'>Blog</Link></li>
            <li className="nav-item"><Link to='/contact'>Contact</Link></li>
             <div className="profile-container">
            <Link to="/profile">
              <img 
                src={data?.data?.profile_pic 
                  ? `${profile_pic(data.data.profile_pic)}` 
                  : '/images/dummy-profile.png'}
               
                className="profile-image" 
              />
            </Link>
          </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
