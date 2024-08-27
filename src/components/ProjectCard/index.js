import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({
  imageLink,
  title,
  description,
  visitLink,
  backgroundColor,
}) {
  const [isViewed, setIsViewed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView === true) {
      setIsViewed(true);
    }
  }, [isInView]);

  return (
    <div>
      {" "}
      <div className="recent-project-wrapper">
        <motion.div
          className="project-image-container-one"
          style={{ backgroundColor: backgroundColor }}
        >
          <img className="img-foodme" src={imageLink} alt="foodme" />
        </motion.div>

        <motion.div
          className="card-foodme"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isViewed ? 0 : 10, opacity: isViewed ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={visitLink}>Visit site</Link>
        </motion.div>
      </div>
      <div className="spotter" ref={ref}></div>
    </div>
  );
}

export default ProjectCard;
