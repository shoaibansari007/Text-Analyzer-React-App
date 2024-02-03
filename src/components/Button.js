function Button({ text, onClick }) {
  return (
    <button
      className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 visited:shadow-2xl max-w-fit"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
