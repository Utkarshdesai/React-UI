import group from '../assets/Group 2252@2x.png'
import circle from '../assets/Icon awesome-check-circle.svg'
import './card.css'

const Card = () => {
  return (
    <div className='card-outer'>
      
      <div className='utk'>
         <img src={group}/>
         <p className='text'> Utkarsh Small Finance Bank </p>
      </div>

      <div className='text-container'>
        
        <div className='container-2'> 
        <img 
            src={circle}
            width={16}
            height={16}
          />
          <p className='bank'> Highest Interest Rate</p>

        </div>
          
        <div className='container-3'>
        <img 
            src={circle}
          />
          <p className='bank'> RBI Insured </p>
        </div>        
         
        
      </div>

     <div className='text-last'> 
      <div className='text-3'>
          <p className='interest'>Interest Upto </p>
          <p className='per-an'> 9.10% p.a </p>
        </div>

        <div className='bg-book'>
         
           <p className='book'> Book Now </p>
          
        </div>
        </div>
       
    </div>
  )
}

export default Card