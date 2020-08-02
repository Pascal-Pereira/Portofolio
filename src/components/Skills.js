import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import './Skills.css';

const imageSkills = [
  {
    name : 'Javascript',
    urlName: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
  },
  {
    name : 'React',
    urlName: 'https://fr.reactjs.org/',
    image: 'https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png'
  },

  {
    name : 'Node JS',
    urlName: 'https://nodejs.org/en/',
    image: 'https://www.alioze.com/wp-content/uploads/2016/11/developpement-nodejs.jpg'
  },
  {
    name : 'MySQL',
    urlName: 'https://www.mysql.com/fr/',
    image: 'https://upload.wikimedia.org/wikipedia/fr/6/62/MySQL.svg'
  }
]


export default function OutlinedChips() {


  return (
    <div className='skills'>
      {imageSkills.map(skill => {
        return (
          <div className = 'skill' >
            <img src={skill.image} alt={skill.name}/> 
          </div>
        )
      })}
    </div>
  );
}

