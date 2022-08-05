import fs from 'fs/promises';
import path from 'path';

async function getImages() {
    let images = [];
    const response = await JSON.parse(await fs.readFile(path.join(process.cwd(), 'data', 'images.json')));
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

export default getImages;