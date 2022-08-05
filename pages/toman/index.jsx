import styles from "./toman.module.scss";
import Link from 'next/link';
import getImages from "../api/getImages";

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
    const data = await getImages();
    const images = data.filter((image) => image.type == "toman")
    return {
        props: {
            data: images
        },
        revalidate: 300
    }
}
export default Toman;