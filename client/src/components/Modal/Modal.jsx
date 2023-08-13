/* eslint-disable react/prop-types */
import styles from "./Modal.module.css"

const Modal = ({title, content})=> {
return (
    <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{content}</h3>
    </div>
)
}

export default Modal