 import emptyImg from "../assets/statics/favpng_error-icon-design-graphical-user-interface.png"
 import styles from "../assets/styles/components/ErrorNotFound.module.css";

const ErrorNotFound=()=>{
    return(
        <div className={styles.container}>
            <img className={styles.image} src={emptyImg} alt="image_not_found" />
            <h1 className={styles.letters}>Error: La página a la que intenta acceder no existe</h1>
        </div>
        
    );
}

export default ErrorNotFound;