import './App.css'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TextField from '@/components/TextField'
import Alert from '@/components/Alert'
import { useAlertContext } from '@/contexts/AlertContext'
// import FixedBottomButton from '@/components/FixedBottomButton'
import Spacing from './components/Spacing'

function App() {
  const { open } = useAlertContext()

  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3" textAlign="right" display="block">
        t3
      </Text>
      <Text typography="t4" display="block" bold>
        t4
      </Text>
      <Text>t5</Text>
      <Text typography="t6" color="green">
        t6
      </Text>
      <Text typography="t7" display="inline-block" color="grey">
        t7
      </Text>

      <Spacing size={40} />

      <Button>default</Button>
      <Button color="success" full>
        success full
      </Button>
      <Button color="error">error</Button>
      <br />
      <Button outline>outline</Button>
      <Button color="success" outline>
        success outline
      </Button>
      <Button color="error" outline full>
        error outline full
      </Button>
      <Button disabled>disabled</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>

      <Spacing size={40} />

      <Input placeholder="로그인" aria-invalid={false} />
      <Input aria-invalid={true} />

      <Spacing size={40} />

      <TextField label="아이디" />
      <TextField
        label="비밀번호"
        hasError={true}
        helpMessage={'비밀번호는 8글자 이상 입력해주세요.'}
        type="password"
      />

      <Spacing size={40} />

      <Alert
        title="알럿입니다"
        description="설명입니다."
        buttonLabel="good"
        onButtonClick={() => {}}
        open={false}
      />

      <Button
        onClick={() => {
          open({
            title: '제목',
            description: '내용입니다.',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert 열기
      </Button>

      <Spacing size={40} />

      {/* <FixedBottomButton label="신청하기" onClick={() => {}} /> */}

      <Spacing size={40} />

      <Button.Group title="버튼 그룹">
        <Button>하나</Button>
        <Button>둘</Button>
        <Button>셋</Button>
      </Button.Group>
    </div>
  )
}

export default App
