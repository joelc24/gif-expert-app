import { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
    }

    return ( 
    
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar una categoria"
                onChange={handleInputChange}
            />
        </form>
        
     );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
 
/* export default AddCategory; */