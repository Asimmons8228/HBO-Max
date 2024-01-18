import { useStateContext } from "@/components/HBOprovider";
import { useEffect } from "react";

const SearchModal = (props) => {
  //   const loopComp = (comp, digit) => {
  //     let thumbnails = [];
  //     for (let index = 0; index <= digit; index++) {
  //       thumbnails.push(comp);
  //     }

  //     return thumbnails;
  //   };
  const globalState = useStateContext();
  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);
  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? "search-modal--active" : ""
      }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="Search for a title"
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpen(false)}
        >
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">Popular Searches</h3>
      <div className="search-modal__thumbnails">
        <div className="search-modal__thumbnail">
          <img src="https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/3/john-wick-2-bo-kev.jpg" />
          <div className="search-modal__top-player">
            <i className="fas fa-play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
