import styles from "./index.module.css"


type DateProps = {
    date: string;
}
export const Date= ({date}:DateProps) => {
    return (
        <span className={styles.date}>{date}</span>
    )
}

export default Date;