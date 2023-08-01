import Hello, { Btn } from "./Hello"


const Example03: React.FC = () => {
  return (
    <div>
      <Btn fn={(text) => console.log(`hello ${text}`)} />
      <Hello text="スパシーバ">
        <div>アシルパ</div>
        <div>インナインナ</div>
      </Hello>
    </div>
  )
}

export default Example03