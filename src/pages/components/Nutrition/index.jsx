import './style.css'

export const Nutrition = ({nutritionsList}) => {
    return(
        <>
            <section className="nutrition">
                <h2 className='nutrition-name'>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                <table className='nutrition-table'>
                    <tbody>
                        {
                            nutritionsList.map((list) => (
                                <tr key={list.nutrition}>
                                    <td>{list.nutrition}</td>
                                    <td><strong>{list.number}</strong></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}