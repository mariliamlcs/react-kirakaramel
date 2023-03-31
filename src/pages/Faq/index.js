import './index.css';
import estrelinha from '../../assets/estrelinha.png';
import Item from './Item';
import bannerFAQ from '../../assets/todas-mini.png';
import { i18n } from '../../translate/i18n';

export default function Faq(){
    return(
    <> 
    <div className="content">
        <div className='title-sections'>
        <div className='estrelinha'><img src={estrelinha} alt='estrelinha'/></div>
        <h1 className='faq-title title-sections orange-text'>
        F.A.Q&nbsp;<b>Kira Kara</b></h1>
        <div className='estrelinha'><img src={estrelinha} alt='estrelinha'/></div>
        </div>
        <br/>
        <hr className='linha-marrom'/>
        <hr className='linha-rose'/>
        <div className='faq-container'>
        <Item 
            question={i18n.t('titles.faq1q')}
            answer={i18n.t('messages.faq1a')}
        />
        <Item 
            question={i18n.t('titles.faq2q')}
            answer={i18n.t('messages.faq2a')}
        />
        <Item 
            question={i18n.t('titles.faq3q')}
            answer={i18n.t('messages.faq3a')}
        />
        <Item 
            question={i18n.t('titles.faq4q')}
            answer={i18n.t('messages.faq4a')}
        />
        <Item 
            question={i18n.t('titles.faq5q')}
            answer={i18n.t('messages.faq5a')}
        />
        </div>

        <div className='banner-FAQ'>
        <img src={bannerFAQ} alt=''/>
        </div>
    </div>
    </>
    )
}