function Calculaton(text) {
  return (
    <div className="w-full mt-4 flex flex-col md:flex-row  flex-wrap md:flex-nowrap">
      <div className="w-full text-center mb-4">
        <div className="border border-blue-900 bg-blue-900 text-white">
          Characters
        </div>
        <div className="border border-blue-900">{text.length}</div>
      </div>
      <div className="w-full text-center mb-4">
        <div className="border border-blue-900 bg-blue-900 text-white">
          Words
        </div>
        <div className="border border-blue-900">{text.length}</div>
      </div>
      <div className="w-full text-center mb-4">
        <div className="border border-blue-900 bg-blue-900 text-white">
          Punctuations
        </div>
        <div className="border border-blue-900">{text.length}</div>
      </div>
      <div className="w-full text-center mb-4">
        <div className="border border-blue-900 bg-blue-900 text-white">
          Sentences
        </div>
        <div className="border border-blue-900">{text.length}</div>
      </div>
    </div>
  );
}

export default Calculaton;
