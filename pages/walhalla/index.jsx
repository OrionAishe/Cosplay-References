import styles from "./valhalla.module.scss";
import Link from "next/link";
import fetchImages from "../api/fetchImages";
import getStaticImages from "../api/getStaticImages";

const Walhalla = (props) => {
    const imagesurl = props.data;
    return (
    <div className={styles.Images}>
    {imagesurl.map((url) =>{
    return <Link key={url.id} href={"walhalla/" + url.id}><img className={styles.Images__Image} src={url.img.toString()} /></Link>
    })}
    </div>
)}

export async function getStaticProps() {
    const data = await fetchImages();
    const staticImages = await getStaticImages();
    const images = data.filter((image) => image.type == "walhalla");
    images.concat(staticImages[1].Walhalla);
    return {
        props: {
            data: images
        },
        revalidate: 3
    }
}
export default Walhalla;