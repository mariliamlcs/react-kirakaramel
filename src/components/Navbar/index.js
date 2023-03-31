import './index.css';
import logoNavbar from '../../assets/logoNavbar.png';
import icon3 from '../../assets/iconSM3white.png';
import iconTwitter from '../../assets/iconTwitterwhite.png';
import iconYT from '../../assets/iconYouTubewhite.png';
import iconReddit from '../../assets/iconRedditwhite.png';
import iconDiscord from '../../assets/iconDiscordwhite.png'
import { Link } from 'react-router-dom';

const Navbar= () =>{
return (
<div className="navbar">
<div className="logo-navbar">
<img src={logoNavbar} alt='Kira Karamel Project' />
</div>

<ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/streamers">Streamers</Link></li>
</ul>
<ul class='social-navbar'>
    <li><a href='https://twitter.com/KiraKaramel' target='_blank' rel="noreferrer"><img src={iconTwitter} className="icon" alt="Twitter"/></a></li>
    <li><a href='https://www.youtube.com/channel/UCCSQdyZCN-sbC-rjw6emvvA' target='_blank' rel="noreferrer"><img src={iconYT} className="icon" alt="YouTube"/></a></li>
    <li><a href='https://apoia.se/kirakaramel' target='_blank' rel="noreferrer"><img src={icon3} className="icon" alt="Apoia-se"/></a></li>
    <li><a href='https://www.reddit.com/r/KiraKara/' target='_blank' rel="noreferrer"><img src={iconReddit} className="icon" alt="Reddit"/></a></li>
    <li><a href='https://discord.gg/3eumKbEf4A' target='_blank' rel="noreferrer"><img src={iconDiscord} className="icon" alt="Discord"/></a></li>
</ul>
</div>
);
};

export default Navbar;