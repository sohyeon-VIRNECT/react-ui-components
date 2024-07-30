import { createPortal } from 'react-dom'
import Button from './Button'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import { css, keyframes } from '@emotion/react'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portal_root = document.getElementById('root-portal')

  if ($portal_root == null) return null

  return createPortal(
    <Container>
      <Button size="medium" onClick={onClick} css={buttonStyles} full>
        {label}
      </Button>
    </Container>,
    $portal_root,
  )
}

const slideup = keyframes`
    to{
        transform: translateY(0);
    }
`

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideup} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
