import { useEffect, useState } from 'react';
import useScroll from '../../Hooks/useScroll';

const Scroller = () => {
    const scrollData = useScroll();
    const [xTrans, setXTrans] = useState(100);


    /*

    Okay, so I can measure scroll height. I can measure it in 10s, etc. 
    What if I create a function that manipulates the styling of a div, while scrollHeight is within a certain range? Then, when the scroll height LEAVES that range, it makes the div disappear?
    */

    const iHaveThePowah = () => {
        if(scrollData.scrollHeight < 1000) {
            setXTrans(xTrans === 0 ? 0 : xTrans- 1);
        }
    }

    useEffect( () => {
        iHaveThePowah();
    }, [scrollData.scrollHeight]);

    return (
        <div className='background' style={{height: `300vh`, width: `100vw`}}>

        <div style={{backgroundColor: 'blanchedalmond', width: `50vw`, height: `50vh`, transform: `translate(${xTrans}%, 0)`}} />
            
        </div>
    );
};

export default Scroller;