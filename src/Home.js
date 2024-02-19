import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import InputArea from "./components/InputArea";
import Features from "./components/Features";
import Alert from "./components/Alert";

function Home({ enabled, setEnabled }) {
  const [text, setText] = useState("");
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
    if (text.value.length !== 0) {
      navigator.clipboard.writeText(text.value);
      showAlert("Copied to clipboard", "Success");
    }
  };
  const handleTrim = () => {
    setText(
      text
        .split(/\s+/)
        .map((w) => w.split(" "))
        .join(" ")
        .trim()
    );
    showAlert("Text Trimmed", "Success");
  };

  const handleCapSentence = () => {
    setText(text[0] + text.toLowerCase().slice(1));
    showAlert("Capitalized Sentences", "Success");
  };

  const handleCapWord = () => {
    setText(
      text
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.toLowerCase().slice(1))
        .join(" ")
    );
    showAlert("Capitalized Words", "Success");
  };

  return (
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
          <div className="flex flex-wrap gap-4">
            <Button
              text="Convert to Uppercase"
              onClick={handleUpperCase}
              disabled={text.length === 0}
            />
            <Button
              text="Convert to Lowercase"
              onClick={handleLowerCase}
              disabled={text.length === 0}
            />
            <Button
              text="Remove Multiple Spaces"
              onClick={handleTrim}
              disabled={text.length === 0}
            />
            <Button
              text="Capitalized Sentences"
              onClick={handleCapSentence}
              disabled={text.length === 0}
            />
            <Button
              text="Capitalized Word"
              onClick={handleCapWord}
              disabled={text.length === 0}
            />
          </div>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-lg max-h-[40px] hover:bg-red-600 visited:shadow-2xl max-w-fit"
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </div>
        <Features text={text} />
      </div>
    </div>
  );
}

export default Home;
