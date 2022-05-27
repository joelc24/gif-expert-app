import { useState } from 'react';

const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Dragon Ball', 'One Piece', 'Naruto', 'Bleach']; */
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece', 'Naruto', 'Bleach']);

    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

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