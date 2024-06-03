const DotIcon = () => {
  return (
    <span className="inline-flex">
      <svg height="14" width="28" className="loader ">
        <circle className="dot" cx="7" cy="10" r="2" />
        <circle className="dot" cx="14" cy="10" r="2" />
        <circle className="dot" cx="21" cy="10" r="2" />
      </svg>
    </span>
  );
};

export default DotIcon;