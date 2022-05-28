import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then( setImages);
    }, [category]);


    return ( 
        <>
            <h3>{category}</h3>
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    );
}
 
export default GifGrid;