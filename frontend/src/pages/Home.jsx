import React, { useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import ProgressCard from "../components/ProgressCard";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <div >
      <Header/>
      <div className="wrapper flex">
        <div className="w-full">
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </div>

        <div className="w-[400px]"></div>
      </div>
    </div>
  );
};

export default Home;
