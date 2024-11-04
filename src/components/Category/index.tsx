import type {Category} from "@/app/libs/microcms_works";
import styles from "./index.module.css"
import {FC, memo} from "react";

type Props = {
    category: Category;
}

export const Categories: FC<Props> = ({category}) => {
    return <span className={styles.tag}>{category.name}</span>
}

export default Categories;