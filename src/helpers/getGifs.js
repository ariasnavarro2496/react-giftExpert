
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=qEuXnvRI5wsB3JbtNa5V8E5oNkMclp5R&q=${ category }&limit=5`;
    const resp = await fetch ( url );

    const { data } = await resp.json();

    const gifts = data.map( img => ({
       
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        
    }));

    
    return gifts;

}