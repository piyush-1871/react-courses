import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Filter filterData={filterData} />
      </div>
      <div className="flex w-11/12 flex-wrap max-w-[1200px] items-center min-h-[50vh] mx-auto justify-center">
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
};

export default App;
