import "./app-info.css";

const AppInfo = ({
        allIngredients,
        allFavorites
    }) => {
    return (
        <div className="app-info">
            <h1>Ingredient Accounting</h1>
            <h2>Total count: { allIngredients}</h2>
            <h2>Favorites: { allFavorites}</h2>
        </div>
    )
}

export default AppInfo