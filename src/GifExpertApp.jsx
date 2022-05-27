import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece', 'Naruto', 'Bleach']);

    /* const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    } */

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr />

            <ol>
                {
                    categories.map( category => (
                        
                        <li key={category}>{category}</li>
                        
                    ))
                }

            </ol>
        </>
    );
}
 
export default GifExpertApp;