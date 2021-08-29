import React from 'react';
import ReactDOM from 'react-dom';
import {NotesContext,LastName} from './Comman';


const Sal = () => {
    
    return ( <>
        <h1>Salary Page</h1>
    
        <NotesContext.Consumer>{(Firstname) => {
          
return (
    <LastName.Consumer>{(LastName) => {
          
        return (
            <h1>{Firstname} {LastName}</h1>
        )      
          
        } }</LastName.Consumer>
)          
   
    } }</NotesContext.Consumer>
    </>
     );
}
 
export default Sal;
