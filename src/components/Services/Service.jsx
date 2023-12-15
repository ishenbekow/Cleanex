import './Service.css'
import HomeIcon from '../../assets/dom.svg'
import CompIcon from '../../assets/comp.svg'
import FloorIcon from '../../assets/dush.svg'
import WindowIcon from '../../assets/window.svg'

const data = [
    {
        id:1,
        Icon: HomeIcon,
        title: 'House Cleaning',
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        id:2,
        Icon: CompIcon,
        title: 'Office Cleaning',
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        id:3,
        Icon: FloorIcon,
        title: 'Floor Cleaning',
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        id:4,
        Icon: WindowIcon,
        title: 'Window Cleaning',
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    }

]





//DRY- (Don't Repeat Yourseld) - принцип

const Service = () => {
  return (
    <div>
        <div className='container'>
            <h3 className='common-title'> OUR SERVICES</h3>
            <h2 className='service-title'>WHAT WE ARE OFFERING</h2>
            <div className=' service-flex'>
                    {data.map(el => {
                        return (
                            <div className="service-card" key={el.id}>
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

export default Service