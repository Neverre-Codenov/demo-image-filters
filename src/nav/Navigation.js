import './Navigation.css';
import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return(
            <div className='navigation'>
                <Link to='/'>Demo</Link>
                <span className="spacer"></span>
                <Link to='/gallery'>Gallery</Link>
            </div>
        );
    }

}

export default Navigation;

