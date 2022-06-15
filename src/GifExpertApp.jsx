import { useState } from 'react';
/* import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'; */
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories(categories => [ newCategory, ...categories]);
    }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            <hr />
            
            {
                categories.map( category => (
                    
                    <GifGrid
                        key={category}
                        category={category}
                    />                       
                ))
            }

            
        </>
    );
}
 
export default GifExpertApp;