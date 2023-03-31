import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {

return (
    <MailchimpSubscribe
      url="https://kirakaramel.us14.list-manage.com/subscribe/post?u=f7571a2093527aff35227736c&amp;id=0aeea4db50&amp;f_id=00a0ffe0f0"
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;