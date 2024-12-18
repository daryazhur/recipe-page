export const Ingredients = ({items}) => {
    return(
        <>
            <section className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}