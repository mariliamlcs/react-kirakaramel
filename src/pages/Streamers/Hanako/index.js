import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import hanakoImg1 from '../../../assets/hana-sobre.png';
import hanakoImg2 from '../../../assets/hana-video.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';
import chibi from '../../../assets/chibi-hanako.png';
import iconTwitter from '../../../assets/iconTwitter.png';
import iconTwitch from '../../../assets/iconTwitch.png';
import iconTiktok from '../../../assets/iconTiktok.png';
import iconYoutube from '../../../assets/youtube.png';
import Video from '../../../assets/Videos/Hanako.mp4'

export default function Hanako(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Gio">Hanako</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('hanako.about')}</p>
            <div className='about-me-list'>
            <ul>
                    <li><b>{i18n.t('titles.streamerName')}</b> Hanako Awing</li>
                    <li><b>{i18n.t('titles.streamerLanguage')}</b>  {i18n.t('messages.portuguese')}</li>
                    <li><b>{i18n.t('titles.streamerDebutDate')}</b> {i18n.t('hanako.debut')}</li>
                    <li><b>{i18n.t('titles.streamerGender')}</b> {i18n.t('messages.gender')} </li>
                    <li><b>{i18n.t('titles.streamerAge')}</b> 21 </li>
                </ul>
                <ul>
                    <li><b>{i18n.t('titles.streamerBirthday')}</b> {i18n.t('hanako.birthday')}</li>
                    <li><b>{i18n.t('titles.streamerHeight')}</b> 1,70m</li>
                    <li><b>{i18n.t('titles.streamerFanbase')}</b> Coven </li>
                    <li><b>{i18n.t('titles.streamerIllustrator')}</b>@G44rt</li>
                    <li><b>{i18n.t('titles.streamerLive2D')}</b>@G44rt</li>
                </ul>
            </div>
            <h3 className='sm-title'>{i18n.t('titles.sm')}</h3>
            <div className='social-media'>
                <p><a href='https://twitter.com/Hanakoawing/' target='_blank' rel="noreferrer"><img src={iconTwitter} alt="Twitter"/></a></p>
                <p><a href='https://twitch.tv/Hanakoawing/' target='_blank' rel="noreferrer"><img src={iconTwitch} alt="Twitch"/></a></p>
                <p><a href='https://tiktok.com/@Hanakoawing' target='_blank' rel="noreferrer"><img src={iconTiktok} alt="TikTok"/></a></p>
                <p><a href='https://www.youtube.com/channel/UC2DKdJQBfROZf0_ejtojWUQ' target='_blank' rel="noreferrer"><img src={iconYoutube} alt="Youtube"/></a></p>
            </div>
        </div>
        <div className='imagem-1'>
            <img src={hanakoImg1} alt=""/>
        </div>
    </div>
 
    <div className='container2'>
        <img src={hanakoImg2} alt=""/>
        <div className='personal-video'>
        <video width="100%" height="auto" controls autoPlay muted >
            <source src={Video} type="video/mp4"/>
        </video>
        </div>
    </div>

    <div className='container3'>
        <div className='titulo-agenda'>
            <h3>Agenda</h3>
            <div className='setinha'></div>
        </div>
        <div className='agenda-dias'>
        <div className='row'>
        <DateNao 
            day={i18n.t('titles.monday')}
        />
        <DateSim 
            day={i18n.t('titles.tuesday')}
            hour="06:00 PM"
        />
        <DateNao 
            day={i18n.t('titles.wednesday')}
        />
        <DateSim 
            day={i18n.t('titles.thursday')}
            hour="06:00 PM"
        />
        </div>
        <div className='row'>
        <DateSim 
            day={i18n.t('titles.friday')}
            hour="06:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.sunday')}
            hour="04:00 PM"
        />
        <img src={chibi} alt="chibi" className="chibi-icon"/>
        </div>
        </div>
        
    </div>
</div>
)
}