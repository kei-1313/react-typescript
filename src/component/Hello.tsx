type HelloProps = {
  text: string,
  children: React.ReactNode
}

const Hello: React.FC<HelloProps> = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <div>
        {props.children}
      </div>
    </div>
  )
}

type FcProps = {
  fn: (text: string) => void
}

export const Btn: React.FC<FcProps> = (props) => {
  return (
    <>
      <button onClick={() => props.fn('TypeScript')}>ボタン</button>
      <button onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('event')}>ボタン2</button>
    </>
  )
}

export default Hello