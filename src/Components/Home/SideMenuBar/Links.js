import React from "react";
import { Link, useLocation } from "react-router-dom";
import pages from "./pages.json";

// interface Props {
//   toggle?: () => void;
// }

function Links(props) {
    const { toggle } = props
  const location = useLocation();
  const path = location.pathname;

  return (
    <ul className="flex md:flex-row items-center flex-col gap-4 md:gap-5 list-none">
      {[
        pages.map(({ id, name, url }) => (
          <li key={id}>
            <Link
              onClick={toggle}
              className={`font-bold text-md md:text-lg decoration-[2px] md:decoration-[3px] underline-offset-[2px] md:underline-offset-[3px] block p-2.5 ${
                (url.length > 1 && path.indexOf(url) >= 0) ||
                (url.length === 1 && url === path)
                  ? "text-primary-700 underline"
                  : "text-gray-200"
              }`}
              to={url}
            >
              {name}
            </Link>
          </li>
        )),
      ]}
    </ul>
  );
}

export default Links;
