import { DetailedHTMLProps, InputHTMLAttributes, memo } from 'react'

import { useCustomScrollDiv } from '@/components/сustomScrollDiv/lib/useCustomScrollDiv'

import './сustomScrollDiv.scss'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CustomScrollDiv = memo(({ children, className, ...rest }: Props) => {
  const {
    handleMouseOut,
    handleMouseOver,
    handleScrollThumbMouseDown,
    hovering,
    scrollBoxHeight,
    scrollBoxTop,
    scrollHostRef,
  } = useCustomScrollDiv()

  return (
    <div
      className={'scrollhost-container'}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className={`scrollhost ${className}`} ref={scrollHostRef} {...rest}>
        {children}
      </div>
      <div className={'scroll-bar'} style={{ opacity: hovering ? 1 : 0 }}>
        <div
          className={'scroll-thumb'}
          onMouseDown={handleScrollThumbMouseDown}
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
        />
      </div>
    </div>
  )
})
