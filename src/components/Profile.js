import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import myProfilePicture from '../images/Pascal.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Profile.css';
import API from '../API';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    // width: '100%',
    marginLeft: '2vw',
    marginRight: '2vw',
  },
  media: {
    height: 0,
    paddingTop: '75%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
  avatar: {
    backgroundColor: '#FB4974',
  },
}));


export default function Profile(props) {


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {props.infos.perso.jobTitle}
        // subheader="Javascript, React, Node JS"
      />
      <CardMedia
        className={classes.media}
        image={myProfilePicture}
        title="myProfilePicture"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        31 rue viret, Villeurbanne
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        69100, France
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
        pereira.pascal@gmail.com
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        +336 82 09 43 45
        </Typography>
        <div className = 'glm' >
        <a href='https://github.com/Pascal-Pereira' target="_blank">
        <LinkedInIcon/> 

          </a>
        <a href='https://www.linkedin.com/in/pascal-pereira' target="_blank">
        <GitHubIcon/>
        </a>
        <a href='pereira.pascal@gmail.com' target="_blank">
        <MailOutlineIcon/>
        </a>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          label='contact'
        >contact
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          My contact
        </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
