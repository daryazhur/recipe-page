export const PreparationTime = ({ times }) => {
    return(
        <>
            <section className="preparation">
                <h3>Preparation time</h3>
                <ul>
                    {times.map((prt) => (
                        <li key={prt.prep}><strong>{prt.prep}:</strong> {prt.time}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}