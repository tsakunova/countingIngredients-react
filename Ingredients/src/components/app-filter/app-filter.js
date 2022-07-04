import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className='btn btn-light'
                type='button'>
                All ingredients
            </button>
            <button
                className = 'btn btn-outline-light'
                type = 'button'>
                Favorites
            </button>
            <button
                className = 'btn btn-outline-light'
                type = 'button'>
                Count 100 and up
            </button>

        </div>
    )
}

export default AppFilter;
