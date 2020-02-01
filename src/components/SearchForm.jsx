import React, { Component } from 'react';

class SearchForm extends Component {

    handleChange = (event) => {

        // let {name, value} = event.target

        this.props.updateSearch(event.target.value)
    }

    render() {

        // console.log(this.props)
        return (
            <div>
            <form>
                <input
                className="search-bar"
                name="name"
                value={this.props.search}
                placeholder="Search..."
                onChange={this.handleChange}
                />
            </form> 
            </div>
        );
    }
}

export default SearchForm;