import './Customers.css'
import  Courtney from '../../assets/courtney.svg'
import Darrel from '../../assets/darrel.svg'
import Jerome from '../../assets/jerome.svg'


const data = [
    {
        id:1,
        Icon: Courtney,
        title: 'Courtney Henry',
        text: "Nursing Assistant"
    },
    {
        id:2,
        Icon:   Darrel,
        title: 'Darrell Steward',
        text: "President of Sales"
    },
    {
        id:3,
        Icon:   Jerome,
        title: 'Jerome Bell',
        text: "Marketing Coordinator"
    },

]





//DRY- (Don't Repeat Yourseld) - принцип

const Customers = () => {
  return (
    <div>
        <div className='container'>
            <h3 className='common-title'> OUR SERVICES</h3>
            <h2 className='customers-title'>WHAT WE ARE OFFERING</h2>
            <div className=' customers-flex'>
                    {data.map(el => {
                        return (
                            <div className="customers-card" key={el.id}>
                                <div className='icon'> 
                                     <img  src={el.Icon} alt="" />
                                    </div>
                          

                                <h5 className='ee'>{el.title}</h5>
                                <p>{el.text}</p>
                            </div>    
                        
                        )})
                    }
              
            </div>
        </div>
    </div>
  )
}

export default Customers