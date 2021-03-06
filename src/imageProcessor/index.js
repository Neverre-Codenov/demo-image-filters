import './ImageProcessor.css';

import React from 'react';
import {connect} from "react-redux";

// ---- custom ----
import IpImage from './IpImage';
import SliderControl from './SliderControl';

class ImageProcessor extends React.Component {

    render() {

        const {
            brightness,
            contrast,
            grayscale,
            hue,
            blur
        } = this.props.ipState;

        return (
            <div className="image-processor-area">
                <IpImage />

                <div className='slider-panel' >
                    <SliderControl
                        id="sl-brightness"
                        label="Brightness"
                        min={0}
                        max={200}
                        initValue={brightness}
                    />

                    <SliderControl
                        id="sl-contrast"
                        label="Contrast"
                        min={0}
                        max={200}
                        initValue={contrast}
                    />

                    <SliderControl
                        id="sl-grayscale"
                        label="Grayscale"
                        min={0}
                        max={100}
                        initValue={grayscale}
                    />

                    <SliderControl
                        id="sl-hue"
                        label="Hue"
                        min={0}
                        max={360}
                        initValue={hue}
                    />

                    <SliderControl
                        id="sl-blur"
                        label="Blur"
                        min={0}
                        max={50}
                        initValue={blur}
                    />

                </div>


            </div>

        )
    }
}

const mapStateToProps = ( state, props ) => {
    return state;
};

ImageProcessor = connect(mapStateToProps)(ImageProcessor);

export default ImageProcessor;
