import './index.css'

const CartItem=(props)=>{
    const {details,onRemove}=props
    const {id}=details


    const onRemoveItem=()=>{
        onRemove(id)
    }

    return(
    <li className="cart-item">
        <img className="cart-image" src={details.image_url} alt="jsd"/>
        <h1>{details.name}</h1>
        <button type="button" className="cart-button" onClick={onRemoveItem} value={details.id}>Remove</button>
    </li>
     )
}

export default CartItem