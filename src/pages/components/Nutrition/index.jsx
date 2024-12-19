import './style.css'

export const Nutrition = ({nutritionsList}) => {
    return(
        <>
            <section className="nutrition">
                <h2>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                <table>
                    {
                        nutritionsList.map((list) => (
                            <tr key={list.nutrition}>
                                <td>{list.nutrition}</td>
                                <td><strong>{list.number}</strong></td>
                            </tr>
                        ))
                    }
                </table>
            </section>
        </>
    )
}