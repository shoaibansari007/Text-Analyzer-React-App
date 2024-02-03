import copyIcon from "../image/copy.svg";

function InputArea({ text, setText, enabled, handleCopy, setEnable }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 ">
        TextLab - Text Analyzer
      </h1>
      <p>
        Text Analyzer is a simple tool that helps you find most frequent phrases
        and words, number of characters, words, sentences and paragraphs, and
        estimated read and speak time of your content.
      </p>
      <div className="relative my-2">
        <textarea
          placeholder="Type or copy/paste your content here!"
          rows="6"
          id="textArea"
          className={`w-full p-2  border border-blue-900 border-solid rounded-md outline-none resize-none bg-blue-50/50 scrollStyle pr-7 ${
            enabled === true ? "dark:bg-gray-700" : ""
          }`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className="absolute cursor-pointer top-2 right-2"
          onClick={handleCopy}
        >
          <img
            src={copyIcon}
            alt=""
            width={20}
            height={20}
            className="opacity-70"
          />
        </div>
      </div>
    </div>
  );
}

export default InputArea;
