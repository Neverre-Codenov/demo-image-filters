import 'typeface-roboto';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import {connect} from 'react-redux';

// -- CUSTOM ------
import {
    setBrightness,
    setContrast,
    setGrayscale,
    setHue,
    setBlur
} from './ipActionCreators';

const styles = {
    root: {
        width: 300,
    },
};

class SliderControl extends React.Component {

    constructor( props ){
        super(props);

        this.state = {
            value: props.initValue,
        };
    }

    handleChange = (event, value) => {

        this.setState({ value });

        switch(this.props.id) {
            case "sl-brightness":
                this.props.dispatchBrightnessValue( value );
                break;
            case "sl-contrast":
                this.props.dispatchContrastValue( value );
                break;
            case "sl-grayscale":
                this.props.dispatchGrayscaleValue( value );
                break;
            case "sl-hue":
                this.props.dispatchHueValue( value );
                break;
            case "sl-blur":
                this.props.dispatchBlurValue( value );
                break;
        }
    };

    render() {
        const {
            classes,
            min,
            max,
            label
        } = this.props;

        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Typography id="label">{label}</Typography>
                <Slider
                    value={value}
                    aria-labelledby="label"
                    onChange={this.handleChange}
                    min={min}
                    max={max}
                />
            </div>
        );
    }
}

SliderControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

const  mapDispatchToProps = ( dispatch ) => {

    const dispatchBrightnessValue = (value) => { dispatch( setBrightness( value ) ) };
    const dispatchContrastValue   = (value) => { dispatch( setContrast( value ) ) };
    const dispatchGrayscaleValue  = (value) => { dispatch( setGrayscale( value ) ) };
    const dispatchHueValue        = (value) => { dispatch( setHue( value ) ) };
    const dispatchBlurValue       = (value) => { dispatch( setBlur( value ) ) };

    const dispatchesObj = {
        dispatchBrightnessValue,
        dispatchContrastValue,
        dispatchGrayscaleValue,
        dispatchHueValue,
        dispatchBlurValue
    };

    return(dispatchesObj);

};

SliderControl = connect( null, mapDispatchToProps )(SliderControl);

export default withStyles(styles)(SliderControl);
