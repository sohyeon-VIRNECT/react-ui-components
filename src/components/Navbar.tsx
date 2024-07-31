import { Link } from 'react-router-dom'
import Flex from './Flex'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

function Navbar() {
  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      <Link to="/test">테스트</Link>
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
`

export default Navbar
