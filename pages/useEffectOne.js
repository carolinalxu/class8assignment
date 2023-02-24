import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectOne.module.css';


export default function useEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <>
            <Link className= {styles.home__button} href="/">Home</Link>
            <div className={styles.body}>
                useEffectOne
            </div>
            <div className={styles.body}>
                {number}
            </div>
        </>
    )
}