import React, { useEffect, useState } from 'react';
import './name.css';

const Display = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [flag, setFlag] = useState(false);

    useEffect(() => {
    }, [flag]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(lastName === '' || firstName === '') {
            alert('Please fill all the fields');
            return;
        }
        else{
            setFlag(true);  
        }
        
    }

    return (
        <div>
            <h1>Full Name Display</h1>
            <form className='stacked' onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <button type='submit'>Submit</button>
            </form>
            {flag && (<p>Full Name : {firstName} {lastName}</p>) }
        </div>
    );
};

export default Display;