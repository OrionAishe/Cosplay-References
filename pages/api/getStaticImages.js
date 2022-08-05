import fs from 'fs/promises';
import path from 'path';

async function getStaticImages(){
    const response = await JSON.parse(await fs.readFile(path.join(process.cwd(), 'data', 'images.json')));
    return response;
}

export default getStaticImages;