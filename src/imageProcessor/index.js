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

        const imgStyles = {
            height: '300px',

            //filter: 'contrast(175%) brightness(' + brightness + '%)'

            filter: 'brightness(100%) grayscale(' + brightness + '%)'
        };

        return (

            <div className="image-processor-area">

                {/*<ProcessImage*/}
                    {/*image='http://localhost:3000/test-image.jpg'*/}
                    {/*resize={{ width: 500, height: 300 }}*/}
                    {/*// colors={{*/}
                    {/*//     mix: {*/}
                    {/*//         color: 'mistyrose',*/}
                    {/*//         amount: 20*/}
                    {/*//     }*/}
                    {/*// }}*/}
                    {/*brightness={brightness}*/}
                    {/*contrast={0}*/}
                    {/*greyscale={0}*/}


                    {/*processedImage={(src, err) => this.setState({ src, err})}*/}
                {/*/>*/}

                <div className="image-area">
                    <img
                        src="http://localhost:3000/test-image.jpg"
                        style={imgStyles}
                    />
                </div>


                <SliderControl
                  label="contrast"
                  min={0}
                  max={200}
                  initValue={100}
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

