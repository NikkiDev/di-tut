import React, { useState, useEffect } from "react";

const ExampleHook = () => {
  const [count, setCount] = useState(window.innerWidth);

  const fetchUsers = async () => {
    const fetchedData = await fetch("https://api.github.com/users");
    const data = await fetchedData.json();
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>Window Size</h1>
      <h3>{count}</h3>
    </>
  );
};

export default ExampleHook;
