function Features({ text }) {
  function handlePunctuations() {
    const punc = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return text.match(punc) ? text.match(punc).length : 0;
  }
  function handleSentences() {
    const dot = /[.!?]/g;
    return text.match(dot) ? text.match(dot).length : 0;
  }
  return (
    <div className="flex flex-col flex-wrap w-full mt-4 sm:flex-row sm:flex-nowrap">
      <div className="w-full mb-4 text-center">
        <div className="text-white bg-blue-900 border border-blue-900">
          Characters
        </div>
        <div className="border border-blue-900">{text.length}</div>
      </div>
      <div className="w-full mb-4 text-center">
        <div className="text-white bg-blue-900 border border-blue-900">
          Words
        </div>
        <div className="border border-blue-900">
          {text.length === 0 ? 0 : text.split(" ").length}
        </div>
      </div>
      <div className="w-full mb-4 text-center">
        <div className="text-white bg-blue-900 border border-blue-900">
          Punctuations
        </div>
        <div className="border border-blue-900">{handlePunctuations()}</div>
      </div>
      <div className="w-full mb-4 text-center">
        <div className="text-white bg-blue-900 border border-blue-900">
          Sentences
        </div>
        <div className="border border-blue-900">{handleSentences()}</div>
      </div>
    </div>
  );
}

export default Features;
