import {Component} from 'react'

import {Link} from 'react-router-dom'

import {doc,updateDoc} from 'firebase/firestore'

import {db} from '../../firebase-configuration'


import './index.css'

class OwnerPage extends Component{
    state={goldRate22:'',goldRate24:'',silver:''}

    on22GoldRateChange=(e)=>{
         this.setState({goldRate22: e.target.value})
    }

    on24GoldRateChange=(e)=>{
        this.setState({goldRate24: e.target.value})
    }

    onSilverChange=(e)=>{
        this.setState({silver: e.target.value})
    }

    onSet=(event)=>{
        event.preventDefault()
        const {goldRate22,goldRate24,silver}=this.state
        const docRef=doc(db,'Jewellery','2023')
        updateDoc(docRef,{goldRate22Carat: goldRate22,goldRate24Carat: goldRate24,silverRate: silver})
        .then(response=>{
            console.log(response)
        })
        .catch(error=>console.log(error.message))          
    } 

    render(){
        const {goldRate22,goldRate24,silver}=this.state
        return(
            <div className='ownerPage'>
                <form onSubmit={this.onSet}>
                <label htmlFor="goldRate">22 Karat Gold</label>
                <input type="text" onChange={this.on22GoldRateChange} id="goldRate" value={goldRate22}/>
                <label htmlFor="24goldRate">24 Karat Gold</label>
                <input type="text" onChange={this.on24GoldRateChange} id="24goldRate" value={goldRate24}/>
                <label htmlFor="silver">Silver</label>
                <input type="text" onChange={this.onSilverChange} id="silver" value={silver}/>
                <button type="submit">Set</button>
                </form>
                <Link to="/">
                    <button type="button">
                        Go To Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default OwnerPage