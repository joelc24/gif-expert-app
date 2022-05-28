import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category);
    }, [category]);

    const API_KEY = '8sg4AkVXVyBkb8fs6AtIUnEWIkYwjz9G'

    const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10&offset=0&rating=g&lang=es`;

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);
    }

    return ( 
        <div>
            <h3>{category}</h3>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            
        </div>
    );
}
 
export default GifGrid;