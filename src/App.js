import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import Search from './components/Search';
import Pagenav from './components/Pagenav';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems] = useState(82);
  const [resultsUrl, setResultsUrl] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setLoading(true);
  //     const res = await axios(`https://swapi.dev/api/people?name=${query}`)
  //     console.log(res.data.results)
  //     setItems(res.data.results)
  //     setLoading(false)
  //   }
  //   fetchItems()
  // }, [query])

  useEffect(() => {
    if (searchQuery.length > 0) {
      setResultsUrl("https://swapi.dev/api/people?search=" + searchQuery);
    } else {
      setResultsUrl("https://swapi.dev/api/people");
    }
  }, [searchQuery])

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  // return (
  //   <div className="container">
  //     <Header />
  //     <Search getQuery={(q) => setQuery(q)} />
  //     <Pagenav />
  //     <Items items={currentItems} loading={loading} />
  //     <Pagination itemsPerPage={10} totalItems={82} paginate={paginate} />

  //   </div>
  // );

  // function updateResultsUrl(searchQuery) {
  //   if (searchQuery.length > 0) {
  //     setResultsUrl("https://swapi.dev/api/people?search=" + searchQuery);
  //   } else {
  //     setResultsUrl("https://swapi.dev/api/people");
  //   }
  // }

  return (
    <div className="container">
      <Header />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Pagenav resultsUrl={resultsUrl}/>
    </div>
  )
}

export default App;
