import React from 'react';
import ProcessImage from 'react-imgpro';

import SliderControl from './SliderControl';

class ImageProcessor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            src: '',
            err: null,

        };

    }

    render() {
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
                    brightness={0}
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

            </div>

        )
    }
}

export default ImageProcessor;

