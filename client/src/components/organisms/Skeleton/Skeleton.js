import { createSkeletonProvider, createSkeletonElement } from '@trainline/react-skeletor';
import styles from "./Skeleton.css";

const navButton = createSkeletonElement("div");

const sideBar = ({button}) => {
    <div>
        <navButton />
        <navButton />
        <navButton />
        <navButton />
        <br/> 
        <navButton />  
    </div>
}

export default createSkeletonProvider(

)(sideBar)

