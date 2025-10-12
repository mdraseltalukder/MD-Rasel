/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ imgSrc, title, tags, projectLink, description }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <figure className="img-box aspect-square rounded-lg  ">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover " />
      </figure>

      <div
        className="  project absolute  bottom-0 left-0 bg-[#2c8288e7] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 rounded-lg"
        style={{ opacity: active ? 1 : undefined }}
        onClick={() => setActive(!active)}
      >
        <div className="project-text flex flex-col items-center  gap-4 absolute z-40 inset-x-0 bottom-0 p-4 translate-y-full transition-transform  ease-in-out  overflow-hidden ">
          <h3 className="title-1  text-white">{title}</h3>
          <p className="text-white text-center">{description}</p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-black bg-[#00e7f8]  grid items-center justify-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>

          <a
            href={projectLink}
            aria-label={title}
            target="_blank"
            className="hover:scale-95 bg-[#00e7f8] 
        text-black px-3 py-1 rounded-lg inset-0 "
          >
            <span className=" material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
