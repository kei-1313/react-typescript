function Example04() {
  type Post = {
    id: number,
    title: string,
    content: string
  }

  const post: Post = {
    id: 1,
    title: 'ダミータイトル',
    content: 'テキストですテキストですテキストですテキストですテキストですテキストです'
  }

  return (
    <div>
      <ul>
        <li>{post.id}</li>
        <li>{post.title}</li>
        <li>{post.content}</li>
      </ul>
    </div>
  )
}

export default Example04