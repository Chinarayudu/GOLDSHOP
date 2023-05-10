import {Component} from 'react'

import {collection,getDocs} from 'firebase/firestore'

import {db} from '../../firebase-configuration'

import JewelItem from '../JewelItem'

import './index.css'

class Jewels extends Component{
    state={ItemDetails:[]}
    
   componentDidMount(){
       this.getItemDetails()
   }

   getItemDetails=()=>{
   const data=collection(db,"Jewellery")
   getDocs(data).then(response=>{const movs=response.docs.map(each=>({data: each.data(),id: each.id}))
   this.setState({ItemDetails: movs})}).catch(error=>console.log(error.message))
   }

    render(){
        const {id}=this.props
        const {ItemDetails}=this.state
        const orList=ItemDetails.filter(each=>(
            each.data.category===id
        ))
       return(
                 <div>
                    <ul className='jewel-ul'>
                    {orList.map(each=>(
                           <JewelItem details={each}  key={each.id}/>
                   ))}
                    </ul>
                 </div>
       )
    }
}

export default Jewels