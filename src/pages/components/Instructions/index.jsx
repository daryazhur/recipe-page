export const Instructions = ({ instruction }) => {
    return(
        <>
            <section className="instructions">
                <h2>Instructions</h2>
                <ol>
                    {instruction.map((stepInstruction) => (
                        <li key={stepInstruction.step}>            
                            <strong>{stepInstruction.step}:</strong> {stepInstruction.description}
                        </li>
                    ))}
                    
                </ol>
            </section>

        </>
    )
}