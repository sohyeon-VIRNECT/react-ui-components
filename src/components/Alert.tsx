import { ReactNode } from 'react'
import Dimmed from './Dimmed'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'

interface AlertProps {
  open?: boolean
  title: ReactNode
  description?: ReactNode
  buttonLabel?: string
  onButtonClick: () => void
}

function Alert({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) {
  if (open === false) return null

  return (
    <Dimmed>
      <AlertContainer>
        <Text typography="t4" display="block" style={{ marginBottom: 6 }} bold>
          {title}
        </Text>
        {description ? <Text typography="t7">{description}</Text> : null}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            style={{ marginTop: 12, border: 'none' }}
            outline
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmed>
  )
}

const AlertContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
  z-index: var(--alert-zIndex);
`

export default Alert
