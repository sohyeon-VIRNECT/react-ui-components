import { colors, Colors } from '@/styles/colors'
import { useEffect, useRef, useState } from 'react'

function ScrollProgressBar({
  color = 'blue',
  marginTop = 0,
}: {
  color?: Colors
  marginTop: number
}) {
  const [progress, setProgress] = useState<number>(0)
  // requestAnimationFrame 의 id 저장
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const scroll = () => {
      // 현재 페이지의 스크롤 위치
      const scrollTop = document.documentElement.scrollTop

      // 스크롤 가능한 높이 = 스크롤 전체 높이 - 브라우저 창 높이
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / height)
      })
    }

    window.addEventListener('scroll', scroll)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div
      style={{
        position: 'sticky',
        top: marginTop,
        zIndex: 2,
        transform: `scaleX(${progress})`,
        transformOrigin: 'left',
        backgroundColor: colors[color],
        height: 8,
      }}
    ></div>
  )
}

export default ScrollProgressBar
