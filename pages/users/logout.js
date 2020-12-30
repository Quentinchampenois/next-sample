import { useRouter } from "next/router";
import { useEffect } from "react";

export default function logout() {
    const router = useRouter()

    useEffect(() => {
        localStorage.clear()
        router.push("/")
    });

    return(
        <>
        </>
    )
}