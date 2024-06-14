import './App.css'
import Card from './component/Card'
import Card1 from './component/Card1'
import Card2 from './component/Card2'
import Card3 from './component/Card3'
import Fdcard from './component/Fdcard'
import Notification from './component/Notification'
import Navbar from './component/Navbar'
import Chart from './component/Chart'

function App() {
  const data = [
    { 
        id: 0,
        heading : 'How FDs are taxed',
        text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        text2: 'Read more...'
    },
    { 
        id: 1,
        heading : 'How FDs are taxed',
        text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        text2: 'Read more...'
    },
    { 
        id: 2,
        heading : 'How FDs are taxed',
        text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        text2: 'Read more...'
    },
]

  return (
    <div className='app' >
     <Navbar></Navbar>

     

    <div className='background'> 
    
     <p className='welcome'> Welcome john paul</p>
   
    <Chart></Chart>
    
    <div className='container'>
     <div className='card-comp'>
      <Card></Card>
      <Card1></Card1>
       <Notification></Notification>
     </div>

     <div className='card-comp2'>
         <Card2></Card2>
         <Card3></Card3>
         <Notification></Notification>
     </div>
       
    <div className='get-ans'>
      <p className='Get'> Get Answer </p>
      <div className='to-all'> 
        <p> to all your questions </p> 
        {/* <div > </div>
        <div > </div> */}
      </div>
    </div>

    <div className='text-card'> 
    {
       data.map ((item) =>   <Fdcard  key={item.id} item = {item}> </Fdcard>)
     }
      <Notification></Notification>
    </div>
   
     
    </div>

       
    </div>  
        
     
    </div>
  )
}

export default App
