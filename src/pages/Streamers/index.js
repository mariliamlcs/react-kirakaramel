import i18nextOptions from 'i18next'
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import './index.css';
import fineLine from '../../assets/fineLine.png';
import readMore from "../../assets/rmore.png";
import DateGrey from '../../components/DateGrey//DateGrey'; 
import DateOrange from '../../components/DateOrange/DateOrange';
import { i18n } from '../../translate/i18n';
import LanguageDetector from 'i18next-browser-languagedetector';
import sunny from '../../assets/sunny.png';
import gio from '../../assets/gio.png';
import pamy from '../../assets/pamy.png';
import ming from '../../assets/ming.png';
import jesse from '../../assets/jesse.png';
import hanako from '../../assets/hana.png';
import ynasshi from '../../assets/ynasshi.png';

i18next.use(LanguageDetector).init(i18nextOptions);

export default function Streamers(){
    return(
<> 
<div className="content">

    <div className='title-sections'>
        <p className='brown-text'><b>{i18n.t('titles.the')}</b></p> <p className='orange-text'>streamers</p>
    </div>
    
    <div className='fine-line'>
        <img src={fineLine} alt=''/>
    </div>

<div className="streamers">
{/*SUNNY*/}
<div className='streamer-right'>
    <div className='flex'>
    <div>
    <h2><Link to="/Sunny">Sunny Seiki</Link></h2>
        <p>{i18n.t('sunny.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="09:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="9:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.tuesday')}
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="10:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="04:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Sunny">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    <div>
        <img src={sunny} alt=""/>
    </div>
    </div>
    </div>

{/*Gio*/}    
    <div className='streamer-left'>
    <div className='flex left'>
    <div>
        <img src={gio} alt=""/>
    </div>
    <div>
        <h2><Link to="/Gio">Gio</Link></h2>
        <p>{i18n.t('gio.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateGrey 
            day={i18n.t('titles.monday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="05:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.wednesday')}
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="05:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.friday')}
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="05:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="05:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Gio">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    </div>
    </div>

{/*Pamy*/}
    <div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Pamy">Pamy</Link></h2>
        <p>{i18n.t('pamy.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateGrey 
            day={i18n.t('titles.monday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="08:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.thursday')}
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="08:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.saturday')}
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="08:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Pamy">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    <div>
        <img src={pamy} alt=""/>
    </div>
    </div>
    </div>

{/*Ming*/}
    <div className='streamer-left'>
    <div className='flex left'>
    <div>
        <img src={ming} alt=""/>
    </div>
    <div>
        <h2><Link to="/Ming">Ming</Link></h2>
        <p>{i18n.t('ming.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="08:00 PM"
        />
        <DateGrey
            day={i18n.t('titles.tuesday')}
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="10:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.tuesday')}
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="10:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.saturday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="04:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Ming">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    </div>
    </div>

{/*Jesse*/}
<div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Jesse">Jesse</Link></h2>
        <p>{i18n.t('jesse.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="04:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.tuesday')}
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="04:00 PM"
        />
        <DateGrey
            day={i18n.t('titles.friday')}
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="03:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="03:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Jesse">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    <div>
        <img src={jesse} alt=""/>
    </div>
    </div>
    </div>

{/*Hanako*/}
<div className='streamer-left'>
    <div className='flex left'>
    <div>
        <img src={hanako} alt=""/>
    </div>
    <div>
        <h2><Link to="/Hanako">Hanako</Link></h2>
        <p>{i18n.t('hanako.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateGrey 
            day={i18n.t('titles.monday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="06:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.wednesday')}
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="06:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="06:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="04:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Hanako">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    </div>
    </div>

    <div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Ynasshi">Ynasshi</Link></h2>
        <p>{i18n.t('ynasshi.about')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="07:00 PM"
        />
        </div>
        <div className='read-more-box'> 
        <div className='read-more'>
            <Link to="/Ynasshi">{i18n.t('messages.readMore')}</Link> 
            <img src={readMore} alt=""></img>
        </div>
        </div>
    </div>
    <div>
        <img src={ynasshi} alt=""/>
    </div>
    </div>
    </div>

</div>
</div>
</>
)
}
