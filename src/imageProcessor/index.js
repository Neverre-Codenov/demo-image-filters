import React from 'react';
// import {connect} from "react-redux";
// ---- custom ----
import IpImage from './IpImage';
import SliderControl from './SliderControl';

class ImageProcessor extends React.Component {

    render() {
        return (
            <div className="image-processor-area">
                <IpImage />

                <SliderControl
                  id="sl-brightness"
                  label="Brightness"
                  min={0}
                  max={200}
                  initValue={100}
                />

                <SliderControl
                    id="sl-contrast"
                    label="Contrast"
                    min={0}
                    max={200}
                    initValue={100}
                />

            </div>

        )
    }
}

// const mapStateToProps = ( state, props ) => {
//     return state;
// };
//
// ImageProcessor = connect(mapStateToProps)(ImageProcessor);

export default ImageProcessor;
