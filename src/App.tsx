import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isAlert, setIsAlert] = useState(false);
  return (
    <div>
      {isAlert && <Alert onClose={()=> setIsAlert(false)}>My Alert</Alert>}
      <Button
        color="danger"
        onClick={() => setIsAlert(true)}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
