import group1 from '../assets/Mask Group 5@2x.png'
import checkcircle from '../assets/Icon awesome-check-circle-2.svg'
import './card1.css'
import './card.css'
const Card1 = () => {
  return (
    <div className='card-outer1'>
      
      <div className='utk'>
         <img src={group1}/>
         <p className='text'> Bajaj Finserv </p>
      </div>

      <div className='text-container'>
        
        <div className='container-2'> 
        <img 
            src={checkcircle}
            width={16}
            height={16}
          />
          <p className='bank'>Crisil AAA Rated</p>

        </div>
          
        <div className='container-3'>
        <img 
            src={checkcircle}
          />
          <p className='bank'> No Video KYC required </p>
        </div>        
         
        
      </div>

     <div className='text-last'> 
      <div className='text-3'>
          <p className='interest'>Interest Upto </p>
          <p className='per-an1'> 8.80% p.a </p>
        </div>

        <div className='bg-book1'>
         
           <p className='book'> Book Now </p>
          
        </div>
        </div>
       
    </div>
  )
}

export default Card1