import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { tutorialSteps } from './tutorialSteps';
import './References.css';
import API from '../API'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',

    width: '100%',
    height: '80vh',
    marginRight: '10vw',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {

    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  divImg: {
    height: 'auto',
    display: 'block',
    maxWidth: 400,
    width: '100%',
  },
  img: {
    height: 'auto',
    display: 'block',
    width: '100%',
    objectFit: 'cover',
  },
}));


function References(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.infos.projects.length;//props.infos.projects

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {  
    setActiveStep(step);
  };
  const url = process.env.REACT_APP_API_URL + '/'
  return (
    <div className = 'refandskills' >
      <div className={classes.root}>
      <CardContent>
        <Typography variant="body2"  component="p">
        {props.infos.perso.bio}
        </Typography>
      </CardContent>
        <Paper square elevation={0} className={classes.header} >
          <Typography color="textSecondary" >{props.infos.projects[activeStep].name}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {props.infos.projects.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.urlReference ? url + step.urlReference : ''} alt={step.name} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
      {/* <div className='skills'>  
      {imageSkills.map(skill => {
        return (
          <div className = 'skill' >
            <img src={skill.image} alt={skill.name}/> 
          </div>
        )
      })}
    </div> */}
    </div>
  );
}

export default References;



