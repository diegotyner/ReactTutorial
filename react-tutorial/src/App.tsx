import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NYC", "DAV", "LAX", "SJC"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }


  const [alertVisible, setAlertVisibility] = useState(false)
  return (
    <div>
      <ListGroup items={items} heading="Airports" onSelectItem={handleSelectItem}/>
      <ListGroup items={items} heading="Airports 2 (Seperate States)" onSelectItem={handleSelectItem}/>
      <Alert onClose={() => alert("I don't close silly!")}>
        <div>Hello World</div>
      </Alert>
      <Button color="dark" onClick={() => console.log("boom")}>
        My Button
      </Button>
      <Button onClick={() => { alertVisible ? setAlertVisibility(false) : setAlertVisibility(true)}}>
        I have a pop-up
      </Button>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    </div>
  ); // <Message/> is <Message><Message/>. "Self-Closing Syntax"
}

export default App;
