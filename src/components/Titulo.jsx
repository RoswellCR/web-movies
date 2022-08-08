
import styles from "../assets/styles/components/Title.module.css";

const Titulo = ({ title} ) => ( 
    
     
   <div>
      <div>
         <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
   
  );

export default Titulo;