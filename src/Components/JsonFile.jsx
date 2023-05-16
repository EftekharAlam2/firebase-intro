import React, { useEffect, useState } from "react";

const JsonFile = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h1>The JSON file loading from the server</h1>
    </div>
  );
};

export default JsonFile;
