import React from 'react';
import Link from '@material-ui/core/Link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <HomeRoundedIcon />
      </Link>
    </div>
  );
};

export default NavBar;
