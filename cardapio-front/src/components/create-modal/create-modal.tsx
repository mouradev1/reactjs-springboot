import { useEffect, useState } from "react"
import { useFoodDataMudate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../interface/FoodData"
import './style.css'
interface InputProps {
    label: string
    value: string | number
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess,isLoading } = useFoodDataMudate()

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
    }
    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastrar novo item no menu </h2>
                <form className="input-container" action="" method="post">
                    <Input label="Title" value={title} updateValue={setTitle} />
                    <Input label="Image" value={image} updateValue={setImage} />
                    <Input label="Price" value={price} updateValue={setPrice} />
                </form>
                <button onClick={submit} className="btn-sec">
                    {isLoading? 'Carregando...': 'Adicionar'}
                </button>
            </div>
        </div>
    )
}