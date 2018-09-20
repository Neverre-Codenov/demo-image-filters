import 'typeface-roboto';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import {connect} from 'react-redux';

//import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

// import createMuiTheme from 'material-ui/styles/theme';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// -- CUSTOM ------
import {
    setBrightness,
    setContrast,
    setGrayscale,
    setHue,
    setBlur
} from './ipActionCreators';

const muiTheme = createMuiTheme({


    overrides: {

        MuiTypography: {
            colorTextPrimary: {
                color: "#644"
            }
        },


        MuiSlider: {
            thumb: {
                backgroundColor: '#caa',
                width: 15,
                height: 12,
                borderRadius: '10%',
                border: 'solid 1px #A88',
            },

            track: {
                backgroundColor: '#fff',
                height: 10,
                border: 'solid 1px #A88'
            },

            trackAfter: {
                opacity: 1,
            },

            trackBefore: {
                backgroundColor: '#000',
                opacity: 0.1,
            }
        },
    }

});

const styles = {
    root: {
        width: '90%',


        // ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        //     width: 100
        // }


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
                <MuiThemeProvider theme={muiTheme}>
                    <Typography
                        color="textPrimary"
                    >{label}</Typography>
                    <Slider
                        value={value}
                        aria-labelledby="label"
                        onChange={this.handleChange}
                        min={min}
                        max={max}
                    />
                </MuiThemeProvider>
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
