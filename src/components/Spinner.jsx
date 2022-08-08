import React from 'react'
import {FaSpinner} from 'react-icons/fa';
import styles from '../assets/styles/components/Spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.Spinner}>
            <FaSpinner className={styles.Spinning} size={60}/>
        </div>
    )
}
