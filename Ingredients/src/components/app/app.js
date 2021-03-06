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
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4; 
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterIngredients = (items, filter) => {
    switch (filter) {
      case 'onStar':
        return items.filter(item => item.isStar);
      case 'moreThen1000':
        return items.filter(item => item.count > 300);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state
    const allIngredients = this.state.data.length;
    const allFavorites = this.state.data.filter(item => item.isFavorite).length;
    const visibleData = this.filterIngredients(this.searchEmp(data, term), filter)
    return (
    <div className="app">
        <AppInfo
          allIngredients={allIngredients}
          allFavorites={allFavorites}
        />
      <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter}
            onFilterSelect={this.onFilterSelect} />
      </div>
      <IngredientsList
        data = {visibleData}
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
