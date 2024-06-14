import shri from '../assets/SHRIRAMFIN.NS-b563e9ad.png'
import awecircle from '../assets/Icon awesome-check-circle.svg'
import './card2.css'

const Card2 = () => {
  return (
    <div className='card-outer2'>
      
      <div className='utk'>
         <img src={shri}/>
         <p className='text'> Shriram Finance </p>
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

        <div className='bg-book2'>
         
           <p className='book'> Book Now </p>
          
        </div>
        </div>
       
    </div>
  )
}

export default Card2