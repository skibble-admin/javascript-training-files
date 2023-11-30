export default function LoginComponent() {
  let username;
  let password;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username,password);
  };

  const changeHandler = (event) => {
    username = event.target.value;
  };
  const passwordHandler = (event) => {
    password = event.target.value;
  };
  return (
    <form action="./index.php" onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter User Name"
      />

    

      <input
        onChange={passwordHandler}
        type="password"
        name="password"
        id="password"
        placeholder="Enter Password"
      />
      <input type="submit" />
    </form>
  );
}
