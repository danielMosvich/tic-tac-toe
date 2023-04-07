export const Square = ({ children, isSelected, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  const Cube = ({ value }) => {
    if (value === "+") {
      return (
        <div className="cube-container">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_193)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M116.3 75.4739L149.353 42.4212C151.625 40.1498 155.307 40.1498 157.579 42.4212C159.85 44.6927 159.85 48.3754 157.579 50.6468L124.526 83.6996C131.986 82.0231 140.696 81.0606 150 81.0606C177.614 81.0606 200 89.5401 200 100C200 110.46 177.614 118.939 150 118.939C140.696 118.939 131.986 117.977 124.526 116.3L157.579 149.353C159.85 151.625 159.85 155.307 157.579 157.579C155.307 159.85 151.625 159.85 149.353 157.579L116.3 124.526C117.977 131.986 118.939 140.697 118.939 150C118.939 177.614 110.46 200 100 200C89.5401 200 81.0606 177.614 81.0606 150C81.0606 140.696 82.0231 131.986 83.6996 124.526L50.6468 157.579C48.3754 159.85 44.6927 159.85 42.4213 157.579C40.1499 155.307 40.1499 151.625 42.4213 149.353L75.474 116.3C68.0135 117.977 59.3035 118.939 50 118.939C22.3858 118.939 0 110.46 0 100C0 89.5401 22.3858 81.0606 50 81.0606C59.3035 81.0606 68.0136 82.0231 75.474 83.6996L42.4213 50.6469C40.1499 48.3755 40.1499 44.6928 42.4213 42.4213C44.6927 40.1499 48.3754 40.1499 50.6468 42.4213L83.6996 75.4741C82.0231 68.0136 81.0606 59.3036 81.0606 50C81.0606 22.3858 89.5401 0 100 0C110.46 0 118.939 22.3858 118.939 50C118.939 59.3035 117.977 68.0135 116.3 75.4739Z" fill="url(#paint0_linear_104_193)"/> </g> <defs> <linearGradient id="paint0_linear_104_193" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> <clipPath id="clip0_104_193"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
        </div>
      );
    }
    if (value === "o") {
      return (
        <div className="cube-container">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_157)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 143.75C124.162 143.75 143.75 124.162 143.75 100C143.75 75.8375 124.162 56.25 100 56.25C75.8375 56.25 56.25 75.8375 56.25 100C56.25 124.162 75.8375 143.75 100 143.75Z" fill="url(#paint0_linear_104_157)"/> </g> <defs> <linearGradient id="paint0_linear_104_157" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_104_157"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
        </div>
      );
    }
  };
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div className={className} onClick={handleClick}>
      {<Cube value={children} />}
    </div>
  );
};
