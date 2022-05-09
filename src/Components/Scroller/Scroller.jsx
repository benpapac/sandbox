import React from 'react';
import useScroll from '../../Hooks/useScroll';

const Scroller = () => {
    const scrollData = useScroll();

    return (
        <div style={{backgrounColor: 'blanchedalmond', width: `50vw`, height: `50vh`}}>
            
        </div>
    );
};

export default Scroller;