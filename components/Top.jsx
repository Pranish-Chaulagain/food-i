import { useState } from "react";
import { FiX } from "react-icons/fi";

const Top = () => {
  const [showTop, setShowTop] = useState(true);

  return (
    <>
      {showTop && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-neutral-900 px-6 py-2 sm:px-3.5 sm:before:flex-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-white">
              Get upto 20% discount on your first order
            </p>
            <button
              className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-black shadow-sm transition-transform 
                  active:scale-95 hover:opacity-75"
            >
              Order now <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={() => setShowTop(false)}
            >
              <span className="sr-only">Dismiss</span>
              <span className="text-xl text-white" aria-hidden="true">
                <FiX />
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Top;
