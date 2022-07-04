import { Component } from 'react';
import './ingredient-add-form.css';

class IngredientAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            count: 0
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.count) return;
        this.props.onAdd(this.state.name, this.state.count);
        this.setState({
            name: '',
            count: ''
        })
    }

    render() {
        const {
            name,
            count,
        } = this.state
        return (
        <div className="app-add-form">
            <h3>Add new ingredient</h3>
                <form
                    onSubmit = {this.onSubmit}
                    className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Add name"
                    name = 'name'
                    value={name}
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Count" 
                    name = 'count'
                    value={count}
                    onChange={this.onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light"
                    >Добавить</button>
            </form>
        </div>
        )
    }
    
}

export default IngredientAddForm;