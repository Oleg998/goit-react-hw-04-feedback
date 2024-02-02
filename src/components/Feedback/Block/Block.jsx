import css from "./Block.module.css"

const Block = ({title, children }) => {
   return (
     <div className={css.title_container}>
       <h2 className={css.title}>{title}</h2>
       {children}
     </div>
   );
};


export default Block