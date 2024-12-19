import './style.css'

export const PreparationTime = ({ times }) => {
    return(
        <>
            <section className="preparation">
                <h3 className='preparation-name'>Preparation time</h3>
                <ul className='preparation-step'>
                    {times.map((prt) => (
                        <li key={prt.prep} className='preparation-step__description'><strong>{prt.prep}:</strong> {prt.time}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}