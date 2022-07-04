import IngredientsListItem from "../ingredients-list-item/ingredients-list-item";
import './ingredients-list.css';

const IngredientsList = ({
        data,
        onDelete,
        onToggle
    }) => {
    
    const elements = data.map(el => {
        const {id, ...itemProps } = el;
        return (
            <IngredientsListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)
                
                }
                onToggle={(e)=>onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
            />
       ) 
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default IngredientsList;
