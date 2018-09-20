import React from 'react';
import {connect} from "react-redux";


class IpImage extends React.Component {

    render() {

        console.log(this.props.ipState);

        const {
            brightness,
            contrast,
            grayscale,
            hue,
            blur
        } = this.props.ipState;

        // const filters = `
        //     contrast(${contrast}%)
        //     brightness(${brightness}%)
        //     grayscale(${grayscale}%)
        //     hue-rotate(${hue})
        //     blur(${blur}%)
        // `;

        // const filters = `
        //     contrast(${contrast}%)
        //     brightness(${brightness}%)
        //     hue-rotate(${hue}deg)
        // `;

        // const filters = `
        //     contrast(${contrast}%)
        //     brightness(${brightness}%)
        // `;

        const imgStyles = {
            height: '300px',
            filter: `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) grayscale(${grayscale}%) blur(${blur}px)`,
        };

        return(
            <div className="image-area">
                <img
                    src="http://localhost:3000/test-image.jpg"
                    style={imgStyles}
                />
            </div>
        );

    }

}

const mapStateToProps = ( state, ownProps ) => {
    return state;
};

IpImage = connect(mapStateToProps)(IpImage);

export default IpImage;


