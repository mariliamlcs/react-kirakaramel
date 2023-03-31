import './index.css';

export default function DateOrange ({day, hour}) {
    return (
    <div class="item-agenda-orange">
    <p>{day}</p>
    <p className='hour'>{hour}</p>
    </div>
    )
}
