import './index.css'

const JewelItem=(props)=>{
    const {details}=props
    const {data}=details

    const getLocalStorageList=()=>{
        const li=localStorage.getItem("cartGoldData")
        const l=JSON.parse(li)
        if (l===null){
            return []
        }else{
          return l
        }
    }
    

    const onAddToCart=()=>{
         const cartList=getLocalStorageList()
         const exists=cartList.find(each=>each.id===data.id)
         if (exists){
            localStorage.removeItem("cartGoldData")
            const parsed=JSON.stringify(cartList)
            console.log(parsed)
            localStorage.setItem("cartGoldData",parsed)
         }else{
            const cartsList=[...cartList,data]
            const parsed=JSON.stringify(cartsList)
            localStorage.removeItem("cartGoldData")
            localStorage.setItem("cartGoldData",parsed)
         }
    }

    return(
        <li className='jewel-item'>
        <img src={details.data.image_url} alt="/"  className="jewel"/>
        <button type="button" className='button-87' onClick={onAddToCart}>Add</button>
        </li>
    )
}

export default JewelItem