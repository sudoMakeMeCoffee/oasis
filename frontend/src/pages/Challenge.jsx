import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../utils/conts";
import { useParams } from "react-router-dom";

const Challenge = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState();

  useEffect(() => {
    axios
      .get(`${APIURL}/challenge/${id}`, { withCredentials: true })
      .then((res) =>{ setChallenge(res.data.data); console.log(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return <div>Challenge</div>;
};

export default Challenge;
