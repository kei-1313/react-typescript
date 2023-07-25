function Example02() {
  type User = {
    name: string,
    age: number
  }

  const user: User = { name: 'Taro', age: 10 }

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }

  const userProfile: UserProfile = {
    name: 'ai',
    age: 18,
    gender: 'woman'
  }

  const sum = (x: number, y: number) => x + y;

  const sum02 = (): void => {
    console.log('void');

  };

  sum02();
  console.log(sum(100, 200));


  return (
    <div>
      {userProfile.name}
    </div>
  )
}

export default Example02