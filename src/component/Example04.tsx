function Example04() {
  type Post = [
    {
      id: number,
      title: string,
      content: string
    }
  ]

  const posts: Post = [
    {
      id: 1,
      title: 'ダミータイトル',
      content: 'テキストですテキストですテキストですテキストですテキストですテキストです'
    }
  ]

  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Example04