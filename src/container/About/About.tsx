import React, {useCallback, useEffect, useState} from "react";
import {About} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components /Spinner/Spinner";

const About: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);

  const fetchDataAbout = useCallback(async () => {
    const {data: response} = await axiosApi.get<About | null>("/about.json");
    setAbout(response);
  }, []);

  useEffect(() => {
    void fetchDataAbout();
  }, [fetchDataAbout]);

  let aboutText = <Spinner/>;
  if (about) {
    aboutText = (
      <div>
        {about.name}
      </div>
    );
  }

  return (
    <div className={"d-flex justify-content-center "}>
      {aboutText}
    </div>
  );
};

export default About;