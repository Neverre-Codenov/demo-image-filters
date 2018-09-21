import React from 'react';

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
            selected: imageUrls.SPACE
        }

    }

    renderList() {
        const {selected} = this.state;
        const iClassName = "thumb-area";
        const l = Object.keys(imageUrls).map((key, i) => {
            const classNames = ( imageUrls[key] === selected ) ? iClassName + " selected" : iClassName;
            return(
                <li key={key}>
                    <div className={classNames}>
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

export default Gallery;
