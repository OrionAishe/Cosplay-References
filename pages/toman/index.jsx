import styles from "./toman.module.scss";
import Link from 'next/link';
import fetchImages from "../api/fetchImages";

const Toman = (props) => {
    const imagesurl = props.data;
    return (
        <div className={styles.Images}>
            {imagesurl.map((url) => {
                return <Link key={url.id} href={"toman/" + url.id}><img className={styles.Images__Image} src={url.img.toString()} /></Link>
            })}
        </div>
    )
}

export async function getStaticProps() {
    const data = await fetchImages();
    const images = data.filter((image) => image.type == "toman")
    return {
        props: {
            data: images
        },
        revalidate: 3
    }
}
export default Toman;