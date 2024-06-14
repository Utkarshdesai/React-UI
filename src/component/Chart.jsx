import './chart.css'

const Chart = () => {
  return (
    <div className="chart">
       <div className="pie-div">
           <div className= 'fd'> 
             <p className='port'> Your Fd portifilo </p>
             <p> Deposite amit </p>
           </div>

           <div className='pie-2'>
           <div className='pie'> </div>
            {/* <div>
              hi
            </div> */}
           </div>
           
       </div> 

       <div className="timeline">

        {/* <div> FD maturity timeline </div> */}
         <div className='time-col'> 
           {/* <div className='text-div1'> 
           J F M A M J J A S O 
           </div> */}
          
          <div className='single-col'> </div>
           <div className='single-col'>M</div>
           <div className='single-col'>M</div>
           <div className='single-col'>A</div>
           <div className='single-col'>M</div>
           <div className='single-col'>J</div>
           <div className='single-col'>A</div>
           <div className='single-col'>S</div>
           <div className='single-col'>O</div>
           <div className='single-col'>N</div>
           <div className='single-col'>D</div>
           <div className='single-col'>J</div> 
           </div>


           <div className='time-col2'>
           <div className='single-col'> J</div>
           <div className='single-col'>M</div>
           <div className='single-col'>M</div>
           <div className='single-col'>A</div>
           <div className='single-col'>M</div>
           <div className='single-col'>J</div>
           <div className='single-col'>A</div>
           <div className='single-col'>S</div>
           <div className='single-col'>O</div>
           <div className='single-col'>N</div>
           <div className='single-col'>D</div>
           <div className='single-col'>J</div> 
           </div>
           
           <div className='time-col3'>
           <div className='single-col'> J</div>
           <div className='single-col'>M</div>
           <div className='single-col'>M</div>
           <div className='single-col'>A</div>
           <div className='single-col'>M</div>
           <div className='single-col'>J</div>
           <div className='single-col'>A</div>
           <div className='single-col'>S</div>
           <div className='single-col'>O</div>
           <div className='single-col'>N</div>
           <div className='single-col'>D</div>
           <div className='single-col'>J</div> 
           </div>

       </div>
    </div>
  )
}

export default Chart