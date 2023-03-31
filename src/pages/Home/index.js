import './index.css';
// import imgHome from '../../assets/bannerHome.png';
import fineLine from '../../assets/fineLine.png';
import newsletterBear from '../../assets/newsletterBear.png';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from '../../NewsletterForm';
import NewsletterSubscribe from '../../NewsletterSubscribe';
import video from '../../home.m4v';


export default function Home(){
  return(
  <>
  <div className='banner-home'>
    <video width="100%" height="auto" autoPlay loop muted >
    <source src={video} type="video/mp4"/>
    </video>
  </div>
  <div className='content'>

    <div className='title-sections'>
      <p className='brown-text'><b>{i18n.t('titles.the')}</b></p> <p className='orange-text'>streamers</p>
    </div>
    <div className='fine-line'>
    <img src={fineLine} alt=''/>
    </div>
    <div className='streamers-home'>
      <div className='box-home'>
      <Link to="/Sunny"><div class='home-icon sunny'><p>Sunny</p></div></Link> 
      <Link to="/Gio"><div class='home-icon gio'><p>Gio</p></div></Link>
      <Link to="/Pamy"><div class='home-icon pamy'><p>Pamy</p></div></Link>
      <Link to="/Ming"><div class='home-icon ming'><p>Ming</p></div></Link>
      <Link to="/Jesse"><div class='home-icon jesse'><p>Jesse</p></div></Link>
      <Link to="/Hanako"><div class='home-icon hanako'><p>Hanako</p></div></Link>
      <Link to="/Ynasshi"><div class='home-icon ynasshi'><p>Ynasshi</p></div></Link>
      </div>
    </div>

  <div className='section-home'>
    <div className='title-welcome'>
      <h1 className='orange-text'>{i18n.t('titles.homeTitle')} <b>Kira</b></h1><h1 className='brown-text'><b>&nbsp;Kara</b></h1>
    </div>

    <div className='text-welcome'>
      <p>{i18n.t('messages.textW1')}</p>
    <br/>
      <p>{i18n.t('messages.textW2')}</p>
      <br/>
      <Link to="/streamers" className='button-marrom'>{i18n.t('titles.knowUs')}</Link>
    </div>
  </div>

  <div className='section-newsletter'>
    <div>
    <h1 className='title-newsletter'>{i18n.t('messages.newsletter1')} <br/><b>{i18n.t('messages.newsletter2')}</b></h1>
      <NewsletterSubscribe />
    </div>
    <div>
    <img src={newsletterBear} alt='' className='bear'/>
    </div>
  </div>

  </div> {/* content */}
  </>
  );
};
