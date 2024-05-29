//import Message from "./Message";
import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let PasswordPolicies = [
    "At Least 8 Characters",
    "At Least 1 Lowercase Letter",
    "At Least 1 Uppercase Letter",
    "At Least 1 Numerical Number",
    "At Least 1 Special Character",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
      {/* <Alert>
        A simple <strong>primary</strong> alert—check it out!
      </Alert> */}
      {/* <Message></Message> */}
      <ListGroup
        items={PasswordPolicies}
        heading="Password Policy"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </>
  );
}

export default App;
