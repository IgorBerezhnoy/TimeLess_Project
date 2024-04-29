import React, { useCallback, useEffect, useRef, useState } from 'react'

const SCROLL_BOX_MIN_HEIGHT = 20

export function useCustomScrollDiv() {
  const [hovering, setHovering] = useState(false)
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT)
  const [scrollBoxTop, setScrollBoxTop] = useState(0)
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0)
  const [isDragging, setDragging] = useState(false)

  const handleMouseOver = useCallback(() => {
    setHovering(true)
  }, [])

  const handleMouseOut = useCallback(() => {
    setHovering(false)
  }, [])

  const handleDocumentMouseUp = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        setDragging(false)
      }
    },
    [isDragging]
  )

  const handleDocumentMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        e.stopPropagation()
        const scrollHostElement = scrollHostRef.current
        const { offsetHeight, scrollHeight } = scrollHostElement as HTMLDivElement

        const deltaY = e.clientY - lastScrollThumbPosition
        const percentage = deltaY * (scrollHeight / offsetHeight)

        setScrollThumbPosition(e.clientY)
        setScrollBoxTop(
          Math.min(Math.max(0, scrollBoxTop + deltaY), offsetHeight - scrollBoxHeight)
        )
        scrollHostElement!.scrollTop = Math.min(
          scrollHostElement!.scrollTop + percentage,
          scrollHeight - offsetHeight
        )
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  )

  const handleScrollThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setScrollThumbPosition(e.clientY)
    setDragging(true)
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollHostRef.current) {
      return
    }
    const scrollHostElement = scrollHostRef.current
    const { offsetHeight, scrollHeight, scrollTop } = scrollHostElement

    let newTop =
      (parseInt(String(scrollTop), 10) / parseInt(String(scrollHeight), 10)) * offsetHeight

    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight)
    setScrollBoxTop(newTop)
  }, [scrollBoxHeight])

  const scrollHostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current!
    const { clientHeight, scrollHeight } = scrollHostElement
    const scrollThumbPercentage = clientHeight / scrollHeight
    const scrollThumbHeight = Math.max(scrollThumbPercentage * clientHeight, SCROLL_BOX_MIN_HEIGHT)

    setScrollBoxHeight(scrollThumbHeight)
    scrollHostElement.addEventListener('scroll', handleScroll, true)

    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true)
    }
  }, [handleScroll])

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove)
    document.addEventListener('mouseup', handleDocumentMouseUp)
    document.addEventListener('mouseleave', handleDocumentMouseUp)

    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove)
      document.removeEventListener('mouseup', handleDocumentMouseUp)
      document.removeEventListener('mouseleave', handleDocumentMouseUp)
    }
  }, [handleDocumentMouseMove, handleDocumentMouseUp])

  return {
    handleMouseOut,
    handleMouseOver,
    handleScrollThumbMouseDown,
    hovering,
    scrollBoxHeight,
    scrollBoxTop,
    scrollHostRef,
  }
}
