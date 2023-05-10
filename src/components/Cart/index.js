import { Component } from "react"

import {Link} from 'react-router-dom'

import CartItem from '../CartItem'

import './index.css'

class Cart extends Component{
    state={ItemsList: []}

    componentDidMount(){
          this.getLocalStorage()
    }

    getLocalStorage=()=>{
        const X=localStorage.getItem("cartGoldData")
        const x=JSON.parse(X)
        console.log(x)
        if (x===null){
            this.setState({ItemsList: []})
        }else{
            this.setState({ItemsList: x})
        }
    }


    onRemove=(id)=>{
        const {ItemsList}=this.state
        const z=ItemsList.filter(each=>(
            each.id!==id
        ))
        const parsed=JSON.stringify(z)
        localStorage.setItem("cartGoldData",parsed)
        this.getLocalStorage()
    }

     render(){
        const {ItemsList}=this.state
        return(
            <div>
                {ItemsList.length===0?(
                <div className="not-found">
                    <img src="https://cdn.dribbble.com/users/2370289/screenshots/6150406/no_items_found.jpg" alt=""/>
                    <Link to="/">
                    <button type="button">Shop Now</button>   </Link>
                    </div>):(<ul className="cart-ul">{ItemsList.map(each=>(
                   <CartItem details={each} key={each.id} onRemove={this.onRemove}/>
                   ))}</ul>)}
            </div>
        )
     }
}

export default Cart