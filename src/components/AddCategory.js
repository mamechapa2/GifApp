import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState();
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Para que no se recvargue la pagina
        
        if(inputValue.length > 2){
            setCategories( categories => [ inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
