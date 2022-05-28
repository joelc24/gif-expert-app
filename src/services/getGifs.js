const getGifs = async (category) => {

    const API_KEY = '8sg4AkVXVyBkb8fs6AtIUnEWIkYwjz9G'

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
 
export default getGifs;