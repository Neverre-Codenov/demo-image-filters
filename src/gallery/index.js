import './Gallery.css';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

const imageUrls = {
    SPACE:     "./images/space-day.jpg",
    FF_ANIM:   "./images/firefox_anime_icon.png",
    AUTOMATON: "./images/automaton-kazuhiko-nakamura.jpg",
    WAVE:      "./images/sunset_wave.jpg",
    TEST:      "./images/test-image.jpg",
};

class Gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.galleryState.selectedImageUrl
        };

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick( url, evt  ) {
        this.setState({ selected: url });
        this.props.dispatchSelectedImage( url );
        this.props.history.push( "/" );
    }

    renderList() {
        const {selected} = this.state;
        const iClassName = "thumb-area";
        const l = Object.keys(imageUrls).map((key, i) => {
            const classNames = ( imageUrls[key] === selected ) ? iClassName + " selected" : iClassName;
            return(
                <li key={key}>
                    <div
                        className={classNames}
                        onClick={ (e) => this.handleClick(imageUrls[key], e) }
                    >
                        <img
                            src={imageUrls[key]}
                            height={100}
                        />
                    </div>
                </li>
            );
        });
        return l;
    }


    render() {
        return(
            <div className="gallery-area">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );

    }
}

function mapDispatchToProps( dispatch, ownProps ) {
    const dispatchSelectedImage = (iurl) => {
        dispatch( {
            type:"set selected image",
            payload: iurl
        } );
    };
    const dispatches = {
        dispatchSelectedImage
    };
    return dispatches;
}

const mapStateToProps = ( state, props ) => {
    return state;
};

Gallery = connect(mapStateToProps, mapDispatchToProps)(Gallery);
Gallery = withRouter( Gallery );

export default Gallery;
