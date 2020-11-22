import React from 'react';
import Link from '@material-ui/core/Link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" component={RouterLink}>
        <HomeRoundedIcon style={{ color: '#868282' }} fontSize="inherit" />
      </Link>
    </div>
  );
};

export default NavBar;
