import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/11/LinkedIn-Logo-Tagline-Slogan-founder-owner.jpg?resize=480%2C480&ssl=1" alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions title="Home" Icon={HomeIcon}/>
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOptions title="Messaging" Icon={ChatIcon}/>
        <HeaderOptions title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOptions title="Me" avatar={"https://media-exp2.licdn.com/dms/image/C4D03AQG2-_A7D0Vp4w/profile-displayphoto-shrink_100_100/0/1606812440696?e=1663200000&v=beta&t=PnDcVZmcSbQuywSbovKVa4csgrm0nR8PtG9IUykYboM"}/>

      </div>
    </div>
  )
}

export default Header