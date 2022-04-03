import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  // const abouts = [
  //   {
  //     title: "Frontend",
  //     description: "Proficiency in ReactJS",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "Backend",
  //     description: "Proficiency in ExpressJS and familiar with Django",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "API Testing",
  //     description: "REST api, Postman and other testing tools",
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: "Database & Operations",
  //     description: "MERN Stack, MongoDB, SQL",
  //     imgUrl: images.about04,
  //   },
  //   {
  //     title: "Data Structures and Algorithms",
  //     description: "Graphs, Arrays, Linked-List, Stack-Queue, C++ STL etc",
  //     imgUrl: images.dsalgo,
  //   },
  //   {
  //     title: "Programming Languages",
  //     description: "JavaScript, Python, C++, Dart",
  //     imgUrl: images.pl,
  //   },
  // ];
  return (
    <>
      <h2 className="head-text">
        There are three responses to a piece of design-
        <span>yes,no, and WOW</span>
        <h4>
          and <span>WOW</span> is the one I am aiming for :)
        </h4>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
