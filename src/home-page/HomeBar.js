import React from 'react';
import { Link } from 'react-router-dom';

const HomeBar = () => {
    return (
        <div className='homeBar'>
            <div className='homeNav'>
                <a>DOCS</a>
                <a className='TextButton'>LOGIN</a>
                <Link to="/signup" className='TextButton'>SIGNUP</Link>
            </div>
        </div>
    );
};

export default HomeBar;