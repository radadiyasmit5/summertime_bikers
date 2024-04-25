"use client"
import React, {createContext, useRef} from "react"

export const SectionContext = createContext(null)
export const SectionScrollContext = ({children}) => {
  const handleSectionchange = (elementRef) => {
    console.log()
    window.scrollTo({
      top: elementRef.current.offsetTop 
      // - headerRef?.current?.offsetHeight
      ,
      behavior: "smooth",
    })
  }
  const moreInfoRef = useRef(null)
  const experienceRef = useRef(null)
  const technologiesRef = useRef(null)
  const headerRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <SectionContext.Provider
      value={{
        handleSectionchange,
        moreInfoRef,
        experienceRef,
        technologiesRef,
        headerRef,
        contactRef,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}
