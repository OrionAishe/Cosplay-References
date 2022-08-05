import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewReferenceForm.module.scss";

const NewReferenceForm = ({OnAddImage}) => {
    const urlRef = useRef()
    const selectionRef = useRef();

    const SubmitHandler = (event) => {
        event.preventDefault();
        const imageurl = {
            type: selectionRef.current.value,
            img: urlRef.current.value
        }
        OnAddImage(imageurl);
    }

    return <Card>
        <form className={styles.Form} onSubmit={SubmitHandler}>
            <label htmlFor="url">Url:</label>
            <input ref={urlRef} required type="text" name="url" id="url" placeholder="Insira a URL aqui" />
            <label htmlFor="radio">Select:</label>
            <select ref={selectionRef} id="radio" name="radio">
                <option value="toman">Toman</option>
                <option value="walhalla">Walhalla</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    </Card>
}

export default NewReferenceForm;