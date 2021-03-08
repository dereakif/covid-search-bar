import React, { Component } from "react";
import axios from "axios";
import "./Search.scss";
import Virus from "../assets/covid.png";

class Search extends Component {
  state = {
    countries: [],
    searchTerm: "",
  };
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value, loading: true });
  };

  async componentDidMount() {
    axios
      .get(`https://coronavirus-19-api.herokuapp.com/countries`)
      .then((res) => {
        this.setState({ countries: res.data });
      });
  }

  render() {
    let filtered = this.state.countries.filter((item) => {
      return item.country
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div className="container-fluid">
        <div className="search">
          <img className="virus" src={Virus} alt="logo" />
          <h2 className="title">
            Coronavirus Pandemic (COVID-19) Stats by Country
          </h2>
          <form>
            <input
              className="searchBar"
              type="search"
              placeholder="Search..."
              onChange={this.handleChange}
            ></input>
          </form>
        </div>
        <div className="countries">
          {filtered.map((data, i) => (
            <div key={i} className="name">
              <h3 className="countryName">{data.country}</h3>
              <p>Total Cases: {data.cases}</p>
              <p>Active Cases: {data.active}</p>
              <p>Total Deaths: {data.deaths}</p>
              <p>Daily Cases: {data.todayCases}</p>
              <p>Daily Deaths: {data.todayDeaths}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
