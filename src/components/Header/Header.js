import './Header.css'
import { useHistory } from 'react-router-dom'
import Logo from '../../img/logo.png'

const Header = () => {
    let backToHome = useHistory()
    const handleClick = () => {
      backToHome.push('/')
    }
    return (
        <div>
            <img
                onClick={() => handleClick()}
                className='logo'
                src={Logo}
                alt='Logo SWAPI'
            />
        </div>
    )
}

export default Header
