import React, { useState, useCallback } from "react";

import getImages from "./api";

const App: React.FC = () => {
  const [title] = useState("React Image Search");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const formSubmitted = useCallback(async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault();
    setImages([]);
    setLoading(true);
    const images = await getImages(searchTerm);
    setImages(images);
    setLoading(false);
  }, [searchTerm]);

  const onSearchTermChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <form onSubmit={formSubmitted}>
        <label htmlFor="searchTerm">Search Term</label>
        <input
          value={searchTerm}
          onChange={onSearchTermChanged}
          className="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <img
          alt="loading"
          id="loadingImage"
          src="https://i.imgur.com/LVHmLnb.gif"
        />
      )}
      {/* {loading ? (
        <img
          alt="loading"
          id="loadingImage"
          src="https://i.imgur.com/LVHmLnb.gif"
        />
      ) : null} */}
      <section className="images">
        {images.map(url => (
          <img key={url} alt={searchTerm} src={url} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default App;
