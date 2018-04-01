import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/search';
import Results from './components/results/results';
import Pagination from './components/pagination/pagination';
import './App.scss';

class App extends Component {
  state = {
    searchInput: '',
    page: 1,
    maxPage: 0,
    data: {}
  }

  componentDidMount() {
    this.getData(1);
  }

  getData = page => {
    let request = 'https://swapi.co/api/people/?page=' + page;
    if(this.state.searchInput !== '') {
      request += '&search=' + this.state.searchInput;
    }
    axios.get(request)
      .then(res => {
        const maxPage = Math.ceil(res.data.count / 10);
        this.setState({data: res.data, page: page, maxPage: maxPage});
      })
  }
  
  searchSumbitHandler = event => {
    if(event) {
      event.preventDefault();
    }
    this.getData(1);
  }
    
  inputChangedHandler = event => {
    this.setState({searchInput: event.target.value});
  }

  paginationHandler = type => {
    let page = this.state.page;
    if(type === 'next' && page < this.state.maxPage) {
      page++;
    }
    if(type === 'prev' && page > 1) {
      page--;
    }
    this.getData(page);
  }

  render() {
    let noResults = '';
    if(this.state.data.results) {
      noResults = <p>No Results</p>
    }
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <Search submit={this.searchSumbitHandler} changed={this.inputChangedHandler} />
        {this.state.data.count ? <Results data={this.state.data.results} /> : noResults}
        {this.state.data.count ? <Pagination page={this.state.page} maxPage={this.state.maxPage} onPageChange={this.paginationHandler} /> : null}
      </div>
    );
  }
}

export default App;