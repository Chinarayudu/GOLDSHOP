import {Component} from 'react'

import {Link} from 'react-router-dom'

import {doc,getDoc} from 'firebase/firestore'

import {db} from '../../firebase-configuration'

import {FcPhone} from 'react-icons/fc'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const jewelsList=[
    {id: 1,name: 'Bangles',category:'Bangles',imageUrl: 'https://i.pinimg.com/736x/ec/a5/17/eca517ffb9945f34eee93905d4d7261f.jpg'},{id: 2,name: 'necklace',category:'Necklace',imageUrl: 'https://i.pinimg.com/550x/6c/61/57/6c615728aebf800e129df325cab6c394.jpg'},{id: 3,name: 'Long chain',category:'Longchain',imageUrl: 'https://res.cloudinary.com/dfxkazmkc/image/upload/v1681110495/4tIXZl5eYUncO0K2MoNSR-transformed_i08x01.jpg'},
{id: 4,name: 'Chain',category:'Chains',imageUrl: 'https://cdn.shopify.com/s/files/1/0545/1736/6965/products/MZRNCP205D424_1_856a9a6d-8e0b-4892-8e1e-d17fecd59cd5_1200x1200.jpg?v=1629812865'},{id: 5,name: 'Fancy',category:'Fancy',imageUrl: 'https://i.pinimg.com/originals/2a/dc/92/2adc926aa13a7c83942bd7ff73d49b03.jpg'},{id: 6,name: 'Kammal',category:'Kammal',imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kj4m0sw0-0/earring/g/t/k/gold-jhumki-me143-meenaz-original-imafyrhzsher4ad7.jpeg?q=70'},{id: 7,name: 'Choker',category:'Choker',imageUrl: 'https://cdn.shopify.com/s/files/1/1911/0603/products/Kemp-Pearl-Choker_1_1000x.jpg?v=1641659642https://cdn.shopify.com/s/files/1/1911/0603/products/Kemp-Pearl-Choker_1_1000x.jpg?v=1641659642'},{id: 8,name: 'Cz Long Chain',category:'Czlongchain',imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kxuqdu80/necklace-chain/n/s/3/1-sprs-msc-459-chain-necklace-bright-style-original-imaga7wnhuxqhjsq.jpeg?q=70'}]

class Home extends Component{
        state={searchInput:'',goldObject:{}}

        componentDidMount(){
            const docRef=doc(db,'Jewellery','2023')
            getDoc(docRef)
            .then((doc)=>{
              this.setState({goldObject: doc.data()})
            })
        }

        render(){
            const {goldObject}=this.state
            return(
                <div className='home'>
                    <h1 className='gold-rate twenty_four_carrets'>Todays  Gold Rate: </h1>
                    <h1 className='gold-rate twenty_two_carrat'>24 Karat<span className='span1'>:</span>{goldObject.goldRate24Carat}
                    <br/>
                    22 Karat<span className="span1">:</span>{goldObject.goldRate22Carat}
                    </h1>
                    <h1 className='Silver'>Silver Rate: {goldObject.silverRate} Rs per gram.</h1>
                    <div className='home-background'>
                    <ul className='home-ul'>
                    {jewelsList.map(each=>(
                    <Link to={`/ItemDetails/${each.category}`} key={each.id} className='home-link'>
                        <li className='home-li'>
                        <img src={each.imageUrl} alt="category" className='category-image'/>
                            <h1 className='Silver'>{each.name}</h1>
                        </li>
                    </Link>
                    ))}
                    </ul>
                    <div  className='contacts'>
                    <div className="popup-container">
   <Popup
     modal
     trigger={
       <button type="button" className="trigger-button">
          <FcPhone className='fonts'/>
       </button>
     }
   >
     {close => (
       <div className='popup' >
         <div>
         <a href="tel:+91 7989272421">Sai : 7989272421</a>
         <a href="tel:+91 7989272421">Sai : 7989272421</a>
         </div>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           Close
         </button>
       </div>
     )}
   </Popup>
                            
                    </div>
                    <a href="https://wa.me/917989272421" rel="noreferrer" target="_blank"><img src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" alt="whats-app" className='whatsapp-image'/></a>
                    </div>
              
                    </div>
                </div>
            )
        }
}

export default Home 