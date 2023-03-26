import React from "react";

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
        <h2>{item.projectName}</h2>
        <span className="accordianIndicator">
          {selected === index ? "-" : "+"}
        </span>
      </div>
      <div className={selected === index ? "content show" : "content"}>
        <img height={200} width={200} src={item.img} alt="projectImage" />
        <div className="projectDetails">
          <p> {item.description}</p>
          <h5>Features</h5>
          <ul>
            {item.features.map((feature) => (
              <li>feature</li>
            ))}
          </ul>
          <h5>Visit link</h5>
          <a target="_blank" rel="noreferrer" href={item.siteLikn}>
            {item.projectName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
