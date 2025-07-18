import React, { useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import ProgressCard from "../components/ProgressCard";
import ChallengeCard from "../components/ChallengeCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="wrapper flex flex-col-reverse lg:flex-row gap-5">
        <div className="w-full">
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </div>

        <div className="min-w-[200px] flex flex-col  gap-4">
          <div className="flex lg:flex-col gap-2">
            <h1 className="text-md text-gray-400">STATUS</h1>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"solved"}
                name="status"
                className=""
              />
              <label htmlFor="status" className="text-md font-light">
                Solved
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"solved"}
                name="status"
                className=""
              />
              <label htmlFor="status" className="text-md font-light">
                Unsolved
              </label>
            </div>
          </div>

          <hr className="hidden lg:block" />
          
          <div className="flex lg:flex-col gap-2">
            <h1 className="text-md text-gray-400">DIFFICULTY</h1>
            <div className="flex items-center gap-2">
              <input type="checkbox" value={""} name="status" className="" />
              <label htmlFor="status" className="text-md font-light">
                Basic
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" value={""} name="status" className="" />
              <label htmlFor="status" className="text-md font-light">
                Intermediate
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" value={""} name="" className="" />
              <label htmlFor="status" className="text-md font-light">
                Advanced
              </label>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
