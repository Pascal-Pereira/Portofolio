import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import InfoIcon from '@material-ui/icons/Info';
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const pathMap = [
  '/',
  '/https://github.com/Pascal-Pereira',
  '/https://www.linkedin.com/in/pascal-pereira/'
];

export default function Footer () {


  const history = useHistory();
  const handleClick = (event, newValue) => {
    history.push('/')

  };

  return (
    <BottomNavigation style={{ backgroundColor: 'var(--grey)', fontSize: '0.55rem', marginTop: '5vh',width:'100vw' }} onClick={handleClick} showLabels>
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Accueil' value='Accueil' icon={<MailOutlineIcon />} component={Link} to={pathMap[0]} />
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='GitHub' value='GitHub' icon={<GitHubIcon />}  to={pathMap[1]} />
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Linkedin' value='Linkedin' icon={<LinkedInIcon />} to={pathMap[2]} />
      {/* <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Mentions légales' value='Mentions légales' icon={<GavelIcon />} component={Link} to={pathMap[3]} /> */}
    </BottomNavigation>
  );
}
