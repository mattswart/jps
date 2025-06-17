
export default function BusinessHours ({ hours }) {
    return (
        !!hours?.length && (
            <ol className="hours">
                { hours.map(( day, index ) => (
                    day.isOpen ? (
                        <li key={index}><span>{ day.day } </span>{ day.timeOpen } - { day.timeClose }</li>
                    ) : (
                        <li key={index} className="closed"><span>{ day.day } </span>Closed</li>
                    )
                ))}
            </ol>
        )
    )
}