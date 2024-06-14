import './notify.css'

const Notification = () => {
  return (
    <div className="notify">
        <div className='outer-notify'>
          <p className='vid-kyc'> Video KYC </p>
          <div className='text-div'>
            <p className='sch'> Scheduled On </p> 
            <p className='sf-bank'>  Utkarsh SF Bank FD Plan 2</p>
          </div>
          <div className='amount'>
              <div className='cal'>
                 
                  <div className='num1'> 
                    28
                   
                  </div> 
                  <div className='bg-num'>
                    <p className='num2'> Oct,2023 </p>
                  </div>
                 

                  
                 
                 
                 
              </div>

              <div className='year'>
                 <div className='deposite'> 
                    <p className='period'> Deposit Amt</p>
                    <p className='period'> Tennure</p>
                    <p className='period'> Interest Rate</p>
                 </div>

                 <div className='time'>
                     <p className='rupees'> Rs. 25,000 </p>
                    <p className='rupees'> 18 Months </p>
                    <p className='rupees'>  8.10% </p>
                 </div>
              </div>

             
          </div>

          <div className='butt-div'>
            <div className='complete'> 
               <div>  <p className='text-com'> Complete Now </p>  </div>  
            </div>

            <div className='res'> 
                <p className='later'> Reschedule </p> 
            </div>

          </div>
        </div>
    </div>
  )
}

export default Notification