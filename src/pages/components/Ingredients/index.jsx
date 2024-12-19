import './style.css'

export const Ingredients = ({items}) => {
    return(
        <>
            <section className="ingredients">
                <h2>Ingredients</h2>
                <ul className='ingredients-item'>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}