import './style.css'

export const Instructions = ({ instruction }) => {
    return(
        <>
            <section className="instructions">
                <h2 className='instructions-name'>Instructions</h2>
                <ol className='instructions-step'>
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