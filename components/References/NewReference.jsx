import NewReferenceForm from "./NewReferenceForm";
import { useRouter } from "next/router";

const NewReference = () => {
    const router = useRouter();

    const OnAddImage = async (image) => {
        const response = await fetch('https://baji-df0b9-default-rtdb.firebaseio.com/images.json', {
            method: 'POST',
            body: JSON.stringify(image),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            router.replace('/toman')
        }
    }

    return <NewReferenceForm OnAddImage={OnAddImage} />
}

export default NewReference;