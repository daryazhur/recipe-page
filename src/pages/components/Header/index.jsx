import './style.css'

export const Header = ({ omelette }) => {
    return(
        <>
            <img className="img-omelette" src={omelette} alt="omelette" />
            <section className='header'>
                <h1>Simple Omelette Recipe</h1>
                <p>
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                    to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>
            </section>
        </>
    )
}