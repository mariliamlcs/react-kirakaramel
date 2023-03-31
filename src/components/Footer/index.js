import './index.css';
import icon3f from '../../assets/iconSM3orange.png';
import iconTwitterf from '../../assets/iconTwitterorange.png';
import iconYTf from '../../assets/iconYouTubeorange.png';
import iconRedditf from '../../assets/iconRedditorange.png';
import iconDiscordf from '../../assets/iconDiscordorange.png'

const Footer=() =>{
    return (
    <footer>
    <div className="footer">
    <ul>
        <li><a href='https://twitter.com/KiraKaramel' target='_blank'><img src={iconTwitterf} alt='Twitter'/></a></li>
        <li><a href='https://www.youtube.com/channel/UCCSQdyZCN-sbC-rjw6emvvA' target='_blank'><img src={iconYTf} alt='YouTube'/></a></li>
        <li><a href='https://apoia.se/kirakaramel' target='_blank'><img src={icon3f} alt='apoia-se'/></a></li>
        <li><a href='https://www.reddit.com/r/KiraKara/' target='_blank'><img src={iconRedditf} alt='Reddit'/></a></li>
        <li><a href='https://discord.gg/3eumKbEf4A' target='_blank'><img src={iconDiscordf} alt='Discord'/></a></li>
    </ul>
    </div>
    </footer>
    );
};

export default Footer;
