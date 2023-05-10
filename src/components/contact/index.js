import './index.css'
const Contact=()=>(
    <div>
        <h1 className='cont'>Contact</h1>
        <div className='contacts'>
            <a href="tel:+91 7989272421"><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/12/Cartoon-Call-PNG.png" alt="phone" className='whatsapp-image'/></a>
            <a href="https://wa.me/917989272421" rel="noreferrer" target="_blank"><img src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" alt="whats-app" className='whatsapp-image'/></a>
        </div>
        <div className=' location-cont'>
        <iframe title="location" className='location ' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d882.5864007930577!2d76.85031066599096!3d14.711786597679712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQyJzQxLjQiTiA3NsKwNTEnMDEuNCJF!5e0!3m2!1sen!2sin!4v1681137257632!5m2!1sen!2sin" width="1600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    )


export default Contact