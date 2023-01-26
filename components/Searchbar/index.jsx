import Styles from "./Styles.module.scss";
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className={Styles.form_group}>
      <input
        type="text"
        className={Styles.form__control}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button className={Styles.search__button}>search</button>
    </div>
  );
}
