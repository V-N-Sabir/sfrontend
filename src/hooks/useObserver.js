import {useEffect, useRef} from "react"

// ref - ссылка . При видимости её будет выполняться код.
// callback - Функция запрос на сервер
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
       // if (pathname === "/") {
        console.log("scroll",isLoading)
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        var cb = function(entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
   // }
    // eslint-disable-next-line    
    }, [isLoading])
}
