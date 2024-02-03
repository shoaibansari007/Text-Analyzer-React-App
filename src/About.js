import "./App.css";

function About({ enabled, setEnabled }) {
  return (
    <div
      className={`box-border w-full min-h-screen max-h-fit p-8 pt-8 bg-white leading-8 ${
        enabled === true ? "dark:bg-gray-900 dark:text-white/70" : ""
      }`}
    >
      <div
        className={`relative max-w-2xl p-4 mx-auto border border-black border-solid rounded-2xl ${
          enabled === true ? "dark:border-white/80 dark:bg-gray-900" : ""
        }`}
      >
        <div>
          <h1 className="text-2xl font-bold text-blue-900 ">
            About TextLab - Text Analyzer
          </h1>
          <p>
            TextLab is a content analysis tool that provides extensive statistic
            about your content like count of characters, words, sentences,
            spaces, punctuations, the frequency of phrases and words, measure of
            estimated read and speak time. Text Analyzer is useful for writers
            and editors of blogs, forums, websites, product reviews, and anyone
            who wants to ensure their content stays within limits, wants to
            avoid over-usage of certain phrases and words, and check for best
            distribution of words in their writings. To use Text Analyzer,
            copy/paste or type your content in the above textarea. Counters like
            count of characters, words, sentences, paragraphs, spaces,
            punctuations, the estimated reading and speaking time will update
            instantly. After typing your content generate count and density of
            phrases and words.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
