import './navbar.css'
import r from '../assets/logo-rackext-svgrepo-com.svg'

const Navbar = () => {
  return (
    <div className="nav">
    
        <div className='imgdiv'>
           <img src={r}/>
           </div>
           <p className='dash'> Dashboard </p>
           <p className='faq'> FAQs</p>
           <p className='supp'> Support</p>
   
           <div className='icon'> </div>

    
       
   </div>
  )
}

export default Navbar