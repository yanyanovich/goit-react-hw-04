import css from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSubmit, toast }) {
  const [query, setQuery] = useState("");
  const handeSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Cannot be empty");
    }
    onSubmit(query);
    setQuery("");
  };

  const handeChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handeSubmit}>
          <input onChange={handeChange} className={css.input} type="text" name="search" autoComplete="off" autoFocus placeholder="Search images and photos" />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
}
