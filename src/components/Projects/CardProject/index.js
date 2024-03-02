import React from "react";
import "./index.scss";

function CardProject(props) {
  const { toggle, selected, index, item } = props;

  return (
    <div className="item" key={index}>
      <div
        className="title"
        onClick={() => {
          toggle(index);
        }}
      >
        <h1>{item.projectName}</h1>
        <span className="accordianIndicator">
          {selected === index ? "-" : "+"}
        </span>
      </div>
      <div className={selected === index ? "content show" : "content"}>
        <div className="imgWrapper">
          <img
            height={200}
            width={200}
            src={item.img}
            alt="projectImage"
            className="logo"
          />
        </div>
        <div className="projectDetails">
          <p> {item.description}</p>
          <h5>{item.feature}</h5>
          <ul>
            {item.features.map((feature, index) => (
              <li>{feature}</li>
            ))}
          </ul>
          <div className="visitLink">
            <h5>Visit at</h5>
            <a target="_blank" rel="noreferrer" href={item.siteLikn}>
              {item.projectName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
