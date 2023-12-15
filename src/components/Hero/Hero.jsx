import './Hero.css'
import HeroImg from '../../assets/hero-girl.png' 
import HeroImg2 from '../../assets/Group 3.svg'
import HeroImg3 from '../../assets/LOGO 2.svg'
import HeroImg4 from '../../assets/LOGO 3.svg'
import HeroImg5 from '../../assets/LOGO 4.svg'
import HeroImg6 from '../../assets/Group 2.svg'
import HeroImg7 from '../../assets/Group 4.svg'




const Hero = () => {
    return (
       <div>
  <div className="container hero-flex">
            <div className='hero-text'>
           <h3 className='hero-title'>
            HIGHLY PROFESSIONAL CLEANING
            </h3>
           <h1 className='hero-h1'>
            EASY TO CLEAN <br/>HOUSE AND OFFICE
            </h1>
           <p className='hero-p-text'>
            Amet minim mollit non deserunt ullamco  sit aliqua dolor do amet sint. Velit officia enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
           <button className='hero-btn '>
            Get a Quote
            </button>
<h5 className='hero-h5'>TRUSTED PARTNERS</h5>
<h2 className='hero-h2'>BRANDS WHO TRUST US</h2>




            </div>
            <div className='hero-img'>
                <img src={HeroImg} alt="" />
            </div>
        </div>
        <div className='hero-PARTNERS'>
            <div className="container">
                <img src={HeroImg2} alt="1" />
                <img src={HeroImg3} alt="2" />
                <img src={HeroImg4} alt="3" />
                <img src={HeroImg5} alt="4" />
                <img src={HeroImg6} alt="5" />
                <img src={HeroImg7} alt="6" />
            </div>
        </div>

       </div>
      

    )
}

export default Hero;

