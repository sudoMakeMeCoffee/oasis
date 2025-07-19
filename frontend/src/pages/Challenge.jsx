import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../utils/conts";
import { useParams } from "react-router-dom";
import ChallengeDescBox from "../components/ChallengeDescBox";
import Header from "../components/Header";

import Split from "react-split";
import ReactMarkdown from "react-markdown";
import "tailwindcss/tailwind.css";
import Editor from "../components/Editor";

const Challenge = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState();

  useEffect(() => {
    axios
      .get(`${APIURL}/challenge/${id}`, { withCredentials: true })
      .then((res) => {
        setChallenge(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header title={challenge?.title} subTitle={"Challenge"} />

      <Split
        className="flex h-screen"
        sizes={[50, 50]}
        minSize={200}
        gutterSize={6}
        gutter={() => {
          const gutter = document.createElement("div");
          gutter.className = "bg-gray-300 cursor-col-resize w-1";
          return gutter;
        }}
        direction="horizontal"
      >
        {/* Left: Markdown Description */}
        <div className="p-6 overflow-auto bg-white">
          <ChallengeDescBox challenge={challenge} />
        </div>

        {/* Right: Code Editor Placeholder */}
        <div className="p-4 bg-gray-100">
          <Editor challenge={challenge} />
        </div>
      </Split>
    </div>
  );
};

export default Challenge;
