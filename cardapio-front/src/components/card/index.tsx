import './style.css'
interface CardProps {
    title: string
    image: string
    price: number
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price)
}

export function Card({title, image, price} : CardProps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b> {formatPrice(price)}</p>
        </div>
    )
}

