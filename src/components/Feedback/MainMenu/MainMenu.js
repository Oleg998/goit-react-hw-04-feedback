import css from "./MainMenu.module.css"

const MainMenu = ({ options, addValue }) => {
  const btnElement = options.map(name => (
    <button key={name} onClick={() => addValue(name)} className={css.btn_menu} type="button" >
      {name}
    </button>
  ));
 return (
  <div>
    <ul className={css.list_menu}>
      {btnElement}
    </ul>
  </div>
 )
};


export default MainMenu;
  