import './index.css';
import Collapsible from 'react-collapsible';

export default function itemFAQ({question, answer}){
    return(
    <>
     <Collapsible trigger={question} className='question-faq' >
            <div className='answer-faq'>
            {answer}
            </div>
        </Collapsible>   
    </>
    )
}