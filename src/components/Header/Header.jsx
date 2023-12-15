import './header.css'
import Logo from '../../assets/Logo.svg'
import Calendar from '../../assets/calendar.svg'

const Header = () => {
  return (
    <header className='header container'>
        <div className='logo'>
           <img width={45} height={45} src={Logo} alt="logo" />
            <span>cleanex</span>
        </div>
        <nav className='nn'>
            <a href="" className='active'>Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <span className='header-btn'>
                <img className='call'src={Calendar} alt="" />
              <button className='common-btn'>Book Schedule</button>
            
            </span>
            
        </nav>
    </header>
  )
}

export default Header



