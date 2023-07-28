import React,{useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }
    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <button onClick={handleClick} >Show Modal</button>
            <Child show={show} />
        </div>
    )
}

export default Parent;