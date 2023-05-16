import React, { useContext } from "react";
import { Context } from "./Providers";

const Home = () => {
  const user = useContext(Context);

  return (
    <div>
      <h2>This is Home {user && user.checking}</h2>
    </div>
  );
};

export default Home;
