import './style.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import logout from '../../assets/logout.svg';

function Header () {
    return (
        <div className="container-header">
            <img src={logo} alt="logo-dindin"/>
            <div className="container-profile">
                <img src={avatar} alt="img-avatar"/>
                <h1>Daniel</h1>
                <img src={logout} alt="logour"/>
            </div>
        </div>
    )
}

export default Header;