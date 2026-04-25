import React from 'react'
import { useEffect, useRef } from 'react'

const CustomCursor = () => {

    const divRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const animationIdRef = useRef(null);

    useEffect(()=>{
        const moveHandler = (e) =>{
            positionRef.current = { x: e.clientX, y: e.clientY };
            
            if (!animationIdRef.current) {
                animationIdRef.current = requestAnimationFrame(() => {
                    if (divRef.current) {
                        divRef.current.style.transform = `translate(${positionRef.current.x - 40}px, ${positionRef.current.y - 40}px)`;
                    }
                    animationIdRef.current = null;
                });
            }
        }

        window.addEventListener('mousemove', moveHandler);

        return () => {
            window.removeEventListener('mousemove', moveHandler);
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        }
    }, [])

  return (
    <div ref={divRef} className='pointer-events-none fixed top-0 left-0 z-[9999]' 
    style={{transform:'translate(0px, 0px)'}}>

        <div className='w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80'/>
      
    </div>
  )
}

export default CustomCursor
