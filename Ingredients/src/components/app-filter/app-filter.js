import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {
            name: 'all',
            label: 'All ingredients'
        },
        {
            name: 'onStar',
            label: 'Favorites'
        },
        {
            name: 'moreThen1000',
            label: 'Count 100 and up'
        }
    ]
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const classNames = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${classNames}`}
                type='button'
                onClick={()=> props.onFilterSelect(name)}
            key={name}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
