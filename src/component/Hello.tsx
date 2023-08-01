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

export default Hello