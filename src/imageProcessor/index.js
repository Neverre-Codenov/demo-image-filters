import React from 'react';
import ProcessImage from 'react-imgpro';

import SliderControl from './SliderControl';

import {connect} from "react-redux";

class ImageProcessor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            src: '',
            err: null,

        };

    }

    render() {

        console.log( this.props.ipState );

        const {
            brightness
        } = this.props.ipState;

        return (

            <div className="image-processor-area">

                <ProcessImage
                    image='http://localhost:3000/test-image.jpg'
                    resize={{ width: 500, height: 300 }}
                    // colors={{
                    //     mix: {
                    //         color: 'mistyrose',
                    //         amount: 20
                    //     }
                    // }}
                    brightness={brightness}
                    contrast={0}
                    greyscale={0}


                    processedImage={(src, err) => this.setState({ src, err})}
                />


                <SliderControl
                  label="contrast"
                  min={-1}
                  max={1}
                  initValue={0}
                />

                <div className='test'>test {this.props.ipState.brightness}</div>

            </div>

        )
    }
}

const mapStateToProps = ( state, props ) => {
    return state;
};

ImageProcessor = connect(mapStateToProps)(ImageProcessor);

export default ImageProcessor;

