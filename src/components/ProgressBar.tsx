import { colors } from '@/styles/colors'
import styled from '@emotion/styled'

function ProgressBar({ progress }: { progress: number }) {
  return (
    <Container>
      <BaseProgressBar progress={progress} />
    </Container>
  )
}

const BaseProgressBar = styled.div<{ progress: number }>(({ progress }) => ({
  height: 10,
  backgroundColor: colors.blue,
  transform: `scaleX(${progress})`,
  transition: 'transform 0.5s',
  transformOrigin: 'left',
}))

const Container = styled.div(() => ({
  width: '100%',
  height: 10,
  backgroundColor: colors.grey,
  overflow: 'hidden',
  borderRadius: 6,
}))

export default ProgressBar
