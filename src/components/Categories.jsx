import React from 'react';
import styles from "../assets/styles/components/Title.module.css";

const Categories = ({children, title} ) => ( 
    
     
   <div>
     <div>
         <h3 className={styles.title}>{title}</h3>
      </div>
    
     {children}
    </div>
   
  );

export default Categories;