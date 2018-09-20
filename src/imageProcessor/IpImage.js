import React from 'react';
import {connect} from "react-redux";


class IpImage extends React.Component {

    render() {

        const {
            brightness
        } = this.props.ipState;

        const imgStyles = {
            height: '300px',
            filter: 'contrast(100%) brightness(' + brightness + '%)'
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


