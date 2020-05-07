import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function CustomSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
        the value of time is {value}
          <Slider
             defaultValue={8}
             // getAriaValueText={valuetext}
             aria-labelledby="discrete-slider"
             valueLabelDisplay="auto"
             step={.16}
             marks
             min={8}
             max={24}
            onChange = {handleSliderChange}
          />
    </div>
  );
}
