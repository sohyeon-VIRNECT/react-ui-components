import { Colors, colors } from '@/styles/colors'
import styled from '@emotion/styled'

interface TagProps {
  color?: Colors
  backgroundColor?: Colors
}

const Tag = styled.span<TagProps>(
  ({ color = 'white', backgroundColor = 'blue' }) => ({
    fontSize: '11px',
    padding: '4px 5px',
    fontWeight: 'bold',
    borderRadius: '2px',
    textAlign: 'center',
    color: colors[color],
    backgroundColor: colors[backgroundColor],
  }),
)

export default Tag
