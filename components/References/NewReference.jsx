import NewReferenceForm from "./NewReferenceForm";

const NewReference = () => {

    const OnAddImage = (image) =>{
        fetch('https://baji-df0b9-default-rtdb.firebaseio.com/images.json', {
            method: 'POST',
            body: JSON.stringify(image),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }

    return <NewReferenceForm OnAddImage={OnAddImage} />
}

export default NewReference;