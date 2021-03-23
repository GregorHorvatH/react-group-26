const Contacts = () => {
  const handleClick = () => console.log('hello');

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <button onClick={handleClick}>push me</button>
    </div>
  );
};

export default Contacts;
