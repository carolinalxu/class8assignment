import Link from "next/link"
import { useEffect, useState } from "react"


export default function useEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    },[])


    return(
        <>
        <Link href="/">Home</Link>
        <div>
            useEffectTwo
        </div>
        <div>
            {number}
        </div>
        </>
    )
}