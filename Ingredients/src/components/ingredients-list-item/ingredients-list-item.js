import './ingredients-list-item.css';

const IngredientsListItem = (props) => {

        const {
            name,
            count,
            onDelete,
            onToggle,
            isFavorite,
            isStar
        } = props;
    
        let defaultClassNames = 'list-group-item d-flex justify-content-between';
         if (isFavorite) {
             defaultClassNames += ' increase';
         }
         if (isStar) {
             defaultClassNames += ' like';
         }
        return (
            <li className = {
                defaultClassNames
            } >
                <span
                    className="list-group-item-label"
                    data-toggle="isStar"
                    onClick={onToggle}
                >{name}</span>
                <input type="text"
                    className="list-group-item-input"
                    defaultValue={count} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle="isFavorite"
                        onClick={onToggle}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"> </i>
                    </button>
                    <i className="fas fa-star" ></i>
                </div>
            </li>
        )
    }


export default IngredientsListItem;