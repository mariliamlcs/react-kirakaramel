import './index.css';
import estrelas from "../../assets/tres-estrelas.png";
import { i18n } from '../../translate/i18n';import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from '../../NewsletterForm';
import NewsletterSubscribe from '../../NewsletterSubscribe';


export default function Shop(){
    return(
    <> 
    <div className="em-breve-box">
        <div>
        <div className='title'>{i18n.t('titles.soon')}</div>
        <br/>
        <img src={estrelas} alt=""/>
        <br/>
        <p className="soon-text">{i18n.t('messages.soonText')}</p>
         <NewsletterSubscribe />
        </div>
    </div>
    </>
    )
}