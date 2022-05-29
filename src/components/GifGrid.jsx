import { useState, useEffect } from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import getGifs from '../services/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const { data, loading } = useFetchGifs()

    useEffect(() => {
        getGifs(category)
            .then( setImages);
    }, [category]);


    return ( 
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
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