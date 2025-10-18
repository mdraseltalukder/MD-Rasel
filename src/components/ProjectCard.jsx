import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProjectCard = ({ imgSrc, title, tags, projectLink, description }) => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile device (<=768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Click toggle only on mobile
  const handleCardClick = () => {
    if (isMobile) {
      setActive((prev) => !prev);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Image */}
      <figure className="img-box aspect-square rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-[#2c8288e7] flex flex-col items-center justify-center text-center 
        p-4 transition-all duration-500 rounded-lg z-10
        ${
          isMobile
            ? active
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
            : "opacity-0 group-hover:opacity-100 translate-y-0"
        }`}
      >
        {/* Title */}
        <h3 className="title-1 text-white text-lg font-semibold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white text-sm mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 text-sm text-black bg-[#00e7f8] grid items-center justify-center px-3 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Project Link */}
        {projectLink && (
          <a
            href={projectLink}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-95 bg-[#00e7f8] text-black px-3 py-1 rounded-lg flex items-center gap-1 transition-transform"
          >
            <span className="material-symbols-rounded text-base">
              arrow_outward
            </span>
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectCard;
