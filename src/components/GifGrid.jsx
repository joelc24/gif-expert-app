import { useState, useEffect } from 'react';

const GifGrid = ({category}) => {

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
    }

    return ( 
        <div>
            <h3>{category}</h3>
        </div>
    );
}
 
export default GifGrid;