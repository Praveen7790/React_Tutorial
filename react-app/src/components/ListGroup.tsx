function ListGroup() {
  const PasswordPolicies = [
    "At Least 8 Characters",
    "At Least 1 Lowercase Letter",
    "At Least 1 Uppercase Letter",
    "At Least 1 Numerical Number",
    "At Least 1 Special Character",
  ];
  return (
    <>
      <h1>Password Policy</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
