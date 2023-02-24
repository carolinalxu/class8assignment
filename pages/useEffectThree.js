import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '@/styles/useEffectThree.module.css';


export default function useEffecThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value +10)
    },[number])



    return(
        <>
        <Link className= {styles.home__button} href="/">Home</Link>
        <div>
            <button className= {styles.clickme_button} onClick= {() => setNumber(number + 10)}>Click Me</button>
        </div>
        <div>
            useEffectThree
        </div>
        <div>
            {number}
        </div>
        </>
    )
}