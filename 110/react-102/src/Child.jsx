export default function ChildComponent({message,showChild,secondMessage,children}) {
    console.log(showChild);

  return (
    <>
      <h3>{message}</h3>
      <h4>{secondMessage}</h4>
     
      {showChild ? children: null}
    </>
  );
}
