
import mask from '../assets/Mask Group 5-1.png'
import awecircle from '../assets/Icon awesome-check-circle.svg'
import './card3.css'
const Card3 = () => {
  return (
    <div className='card-outer3'>
      
      <div className='utk'>
         <img src={mask}/>
         <p className='text'> Mahindra Finance </p>
      </div>

      <div className='text-container'>
        
        <div className='container-2'> 
        <img 
            src={awecircle}
            width={16}
            height={16}
          />
          <p className='bank'> Crisil AAA Rated </p>

        </div>
          
        <div className='container-3'>
        <img 
            src={awecircle}
          />
          <p className='bank'> No Video KYC required </p>
        </div>        
         
        
      </div>

     <div className='text-last'> 
      <div className='text-3'>
          <p className='interest'>Interest Upto </p>
          <p className='per-an'> 8.80% p.a </p>
        </div>

        <div className='bg-book3'>
         
           <p className='book'> Book Now </p>
          
        </div>
        </div>
       
    </div>
  )
}

export default Card3