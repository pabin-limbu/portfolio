import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { motion, useInView } from "framer-motion";

function ProjectCard({
  imageLink,
  title,
  description,
  visitLink,
  backgroundColor,
  project,
  name,
}) {
  const [isViewed, setIsViewed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView === true) {
      setIsViewed(true);
    }
  }, [isInView]);

  console.log(project);
  console.log(name);

  return (
    <div style={{}}>
      {" "}
      <div className="recent-project-wrapper">
        <motion.div
          className="project-image-container-one"
          style={{ backgroundColor: project && project.backgroundColor }}
        >
          <img
            className="img-foodme"
            src={project && project.imgLink}
            alt="foodme"
          />
        </motion.div>

        <motion.div
          className="card-foodme"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isViewed ? 0 : 10, opacity: isViewed ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{project && project.title}</h2>
          <h3>{project && project.subTitle}</h3>
          <p>{project && project.description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={project && project.webSiteLink}
          >
            Visit site
          </a>
        </motion.div>
      </div>
      <div
        className="spotter"
        ref={ref}
        style={{ paddingBottom: "5px" }}
      ></div>
    </div>
  );
}

export default ProjectCard;
