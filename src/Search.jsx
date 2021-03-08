import React from 'react'

class Search extends React.Component {
    
    handleSearch = (event)=>{
        const value =  event.target.value
        this.props.onSearchTerm(value)
    }
    render(){
        return(
            <div className="container">
                <label htmlFor="searchTerm">Find your meal</label>
                <input 
                type="text"
                value={this.props.searchTerm}
                // name="searchTerm"
                placeholder="Find your meal..."
                onChange={this.handleSearch}
                />
            </div>
        )
    }
}

export default Search;