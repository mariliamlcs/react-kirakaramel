import "./index.css"

export default function DateSim ({day, hour}) {
    return (
    <div class="item-agenda2">
    <p>{day}</p>
    <p className="hour">{hour}</p>
    </div>
    )
}
