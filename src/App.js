import { useState, useEffect } from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";


import Navbar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';


import CarsList from './components/CarsList/CarsList';
import carsData from './assets/cars.json';


function App() {

  
  const [data, setData] = useState(carsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const totalPosts = data.length; //passing to pagination component
  

  //getting lastPstIndex and firstPost index to slice data and send to Carlist Component
  const lastPostIndex = currentPage  * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  // getting searchTerm from navbar component search bar
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };


  useEffect(() => {
    // Filter the data based on the search term
    const filteredData = carsData.filter((car) =>
      car['car name'].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setCurrentPage(1); // Reset to the first page when searching
  }, [searchTerm]);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar onSearchTermChange={handleSearchTermChange}/>
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" />} />
        <Route path="/page/:page" element={<CarsList carsData={currentPosts} searchTerm={searchTerm}/>} />
      </Routes>
      <Pagination totalPosts={totalPosts} lastPostIndex={lastPostIndex} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
