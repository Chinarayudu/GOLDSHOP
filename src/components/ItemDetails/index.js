import Jewels from '../Jewels'

import { useParams } from 'react-router-dom'

import './index.css'

const ItemDetails=()=>{
     const {id}=useParams()
     console.log(id)
     return(
        <div>
            <h1 className='item-category'>{id}</h1>
            <Jewels id={id}/>
        </div>
     )
}
export default ItemDetails