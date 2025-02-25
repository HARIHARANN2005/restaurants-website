import React, { useState } from 'react'; // Import useState
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from "../../components/AppDownload/AppDownload";


const Home = () => {
  // Declare state to manage selected category
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      {/* Pass category and setCategory as props to ExploreMenu */}
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}  />
      <AppDownload/>
    </div>
  );
};

export default Home;

