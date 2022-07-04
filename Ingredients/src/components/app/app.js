import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import IngredientAddForm from '../ingredient-add-form/ingredient-add-form';
import IngredientsList from '../ingredients-list/ingredients-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.maxId = 4;
    this.state = {
      data : [
    {
      name: 'Orange juice',
      count: 800,
      isFavorite: true,
      isStar: true,
      id: 1
    },
     {
       name: 'Apple juice',
       count: 300,
       isFavorite: true,
       isStar: false,
       id: 2
    },
      {
        name: 'Strawberry syrup',
        count: 500,
        isFavorite: false,
        isStar: false,
        id: 3
      }
  ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
       data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, count) => {
    const newItem = {
      name,
      count,
      isFavorite: false,
      isStar: false,
      id: this.maxId++
    }
    this.setState(({
      data
    }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggle = (id, prop) => {
    this.setState(({data})=>({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  render() {
    const allIngredients = this.state.data.length;
    const allFavorites = this.state.data.filter(item => item.isFavorite).length;
    return (
    <div className="app">
        <AppInfo
          allIngredients={allIngredients}
          allFavorites={allFavorites}
        />
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <IngredientsList
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggle={this.onToggle}
        />
        < IngredientAddForm
        onAdd = {
          this.addItem
        }
        />
    </div>
  );
  }

  
}

export default App;
