import React from "react";
import DubLogo from "../public/icon/dub.png"
import Extension from "../src/extension";

export default function ContentApp() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(prevState => !prevState);
  };

    return (
      <>
      {!isOpen && (
      <div className="mx-auto p-6" >
        <button
          onClick={()=>setIsOpen(prevState => !prevState)          }
          className="rounded-md border border-gray-500  bg-white p-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <img
            alt="dub.co"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none h-10 w-10 rounded-full blur-0"
            src={DubLogo}
          />
        </button>
      </div>
      )}
      {isOpen && <Extension handleClose={handleClose} />}
    </>
  );
}