import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = { width: 600, margin:50  };

function log(value){
    console.log(value); //eslint-disable-line
}
function percentFormatter(v){
    return'${v} %';
}
const SliderWithTooltip = createSliderWithTooltip(Slider);



class CustomizedSlider extends React.Component{
   let CustomizedSlider;

    constructor(props){
        super(props);
        this.state = {
            value: 50,
        };
    }
    onSliderChange = (value) => {
        log(value);
        this.setState({
            value,
        });
    }
    onAfterChange = (value) =>{
        console.log(value);//eslint-disable-line
    }
    render() {
        return( CustomizedSlider )
           <Slider value={this.state.value}
              onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              />
        );
        ReactDOM.render(e)
    }
}

class DynamicBounds extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            min: 0,
            max: 100,
        };
    }
    onSliderChange = (value) => {
        log(value);
    }
    onMaxChange = (e) =>{
        this.setState({
            max: +e.target.value || 100,
    onMinChange = (e) =>{
        this.setState({
            min: +e.target.value || 0,
        });
    }

    render(){
        <div>
           <label>Min: </label>
           <input type="number" value={this.state.min} onChange={this.onMinChange} />
           <br />
           <label>Max:</label>
           <input type="number" value={this.state.max} onChange={this.onMaxChange}/>
           <br /><br />
           <Slider defaultValue={50} min={this.state.min} max={this.state.max}
              onChange={this.onSliderChange}
              />
        </div>
     );
    }
}
