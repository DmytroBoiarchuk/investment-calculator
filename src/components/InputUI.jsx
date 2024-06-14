import React from 'react';

const InputUi = ({identifier,userInput, setUserInput, children}) => {
    function handleChange (e){
            setUserInput(prevState => {
            const newState = {...prevState}
            newState[identifier] = e.target.value
            return  newState})
    }
    return (
        <div >
            <label>{children}</label>
            <input onChange={handleChange} type='number' required value={userInput[identifier]}/>
        </div>
    );
};

export default InputUi;