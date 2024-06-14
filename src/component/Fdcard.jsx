import './fdcard.css'

const Fdcard = ({item}) => {

    console.log(item.heading)

  return (
    <div className="main-div">
       <p className='head'> {item.heading} </p>
       <p className='text1'> {item.text1} </p>
       <p className='text2'> {item.text2} </p>
    </div>
  )
}

export default Fdcard