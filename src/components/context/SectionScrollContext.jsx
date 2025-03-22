"use client"
import React, {createContext, useRef} from "react"

export const SectionContext = createContext({
  handleSectionchange: () => {},
  moreInfoRef: null,
  footerRef: null,
  technologiesRef: null,
  headerRef: null,
  PromotionBarRef: null,
  contactRef: null,
})

export const SectionScrollContext = ({children}) => {
  const handleSectionchange = (e, elementRef) => {
    e.preventDefault()
    if (!elementRef?.current) return
    window.scrollTo({
      top:
        elementRef.current.offsetTop -
        (headerRef?.current?.offsetHeight || 0) -
        (PromotionBarRef?.current?.offsetHeight || 0),
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
