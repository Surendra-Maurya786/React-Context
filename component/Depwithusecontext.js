import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {NotesContext,LastName} from './Comman';
import Sal from './Sal';

const Dep = () => {
    const fname =useContext(NotesContext);
    const lname =useContext(LastName);
    return ( 
        <>
        <Sal />
        <h1>{fname}{lname}</h1>
        </>
     );
}
 
export default Dep;
