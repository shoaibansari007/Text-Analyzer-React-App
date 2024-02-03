import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import InputArea from "./components/InputArea";
import Features from "./components/Features";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

function App() {
  const [text, setText] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Text converted to Uppercase", "Success");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Text converted to Lowercase", "Success");
  };
  const handleClear = () => {
    setText("");
    showAlert("Text Cleared", "Success");
  };
  const handleCopy = () => {
    const text = document.getElementById("textArea");
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to clipboard", "Success");
  };

  return (
    <>
      <Navbar enabled={enabled} setEnabled={setEnabled} />
      <div
        className={`box-border w-full min-h-screen max-h-fit p-8 pt-8 bg-white ${
          enabled === true ? "dark:bg-gray-900 dark:text-white" : ""
        }`}
      >
        <Alert alert={alert} />
        <div
          className={`relative max-w-2xl p-4 pb-0 mx-auto border border-black border-solid rounded-2xl ${
            enabled === true ? "dark:border-white/80 dark:bg-gray-900" : ""
          }`}
        >
          <InputArea
            text={text}
            setText={setText}
            enabled={enabled}
            handleCopy={handleCopy}
          />
          <div className="flex flex-col justify-between gap-4 sm:flex-row shrink-0">
            <div className="flex gap-4">
              <Button text="Convert to Uppercase" onClick={handleUpperCase} />
              <Button text="Convert to Lowercase" onClick={handleLowerCase} />
            </div>
            <Button text="Clear" onClick={handleClear} />
          </div>
          <Features text={text} />
        </div>
      </div>
    </>
  );
}

export default App;
