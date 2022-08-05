import BackArrow from '../../components/BackArrow/BackArrow';
import fetchImages from '../api/fetchImages';

const ImagePage = (props) => {

    return <>
        <BackArrow></BackArrow>
        <img src={props.image.img} />
    </>
}

export async function getStaticProps(context) {
    const { params } = context;
    const data = await fetchImages();
    const imageurl = data.find((image) => image.id === params.image);
    return {
        props: {
            image: imageurl
        }
    }
}

export async function getStaticPaths() {
    const data = await getImages();
    const ids = data.map((images) => images.id);
    const pathsparams = ids.map((id) => ({ params: { image: id } }))
    return {
        paths: pathsparams,
        fallback: 'blocking'
    };
}

export default ImagePage;