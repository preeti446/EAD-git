import 'antd/dist/antd.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Button} from 'antd'
import { useState } from 'react';

function App() {
  async function fetchMetaData() {
    let allData = [];
    let morePagesAvailable = true;
    let currentPage = 0;
  
    while(morePagesAvailable) {
      currentPage++;
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=hello&page=0=${currentPage}`)
      let { data, total_pages } = await response.json();
      data.forEach(e => allData.unshift(e));
      morePagesAvailable = currentPage < total_pages;
    }
  
    return allData;
  }
  return (
    <>
    
    <h1>My Hacker stories</h1>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Search</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" onclick="submit()=>{fetchMetaData()};">submit</button>
            </form>
          </div>
        </div>
      </nav>
      </>
  );
}

export default App;
