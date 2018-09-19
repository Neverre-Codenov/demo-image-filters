import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

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
                <div>{value}</div>
            </div>
        );
    }
}

SliderControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderControl);
