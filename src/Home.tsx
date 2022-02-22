import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";


export default function Home() {
    return (
        <div className={styles.Home}>
            <h1 className={styles.title}>Home</h1>
            <nav className={styles.nav}>
            <h1  style={{paddingLeft: 13, textDecoration: 'none'}}><Link to="/counter" >Counter</Link></h1>
            <h1><Link to="/todo">Todo</Link></h1>
            </nav>
        </div>

    );
    }