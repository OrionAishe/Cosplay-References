async function fetchImages() {
    let images = [];
    const data = await fetch('https://baji-df0b9-default-rtdb.firebaseio.com/images.json')
    const json = await data.json();
    for(const key in json){
        const image = {
            id: key,
            ...json[key]
        }
        images.push(image);
    }
    return images;
}


export default fetchImages;