"use client"
import Link from 'next/link';
import { useRouter } from "next/navigation"

export default function Error() {
    const router = useRouter();
    const goTohome = () => { // este hace falta para hacer el ultimo boton
        router.push('/');
    };
//que son los use effect / use stect
    return (
        <>
        <div> {/* boton de error 404 */} 
            <h2>Something went wrong!</h2>
            <link href="/"><button>Bóton con link</button></link>
        </div>
        <div>  {/* otra forma de poner el error 404, pero hace falta la const goTohome(de arriba) */}
            <h2>Something went wrong!</h2>
            <button onClick={goTohome}>Bóton con useRouter</button>
        </div>
        </>
            );
}
