"use client"
import React, {createContext, useRef} from "react"

export const SectionContext = createContext(null)
export const SectionScrollContext = ({children}) => {
  const handleSectionchange = (e, elementRef) => {
    e.preventDefault()
    window.scrollTo({
      top:
        elementRef.current.offsetTop -
        headerRef?.current?.offsetHeight -
        PromotionBarRef.current.offsetHeight,
      behavior: "smooth",
    })
  }
  const moreInfoRef = useRef(null)
  const footerRef = useRef(null)
  const technologiesRef = useRef(null)
  const headerRef = useRef(null)
  const PromotionBarRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <SectionContext.Provider
      value={{
        handleSectionchange,
        moreInfoRef,
        footerRef,
        technologiesRef,
        headerRef,
        contactRef,
        PromotionBarRef,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}
