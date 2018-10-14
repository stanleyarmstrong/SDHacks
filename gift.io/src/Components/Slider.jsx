import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range, creat  } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

ReactDOM.render(
   <div>
      <Slider />
      <Range />
   </div>,
        )
