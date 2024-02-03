function Alert({ alert }) {
  setTimeout(() => {}, 1000);

  return (
    alert && (
      <div className="fixed right-0 px-4 py-2 text-xs bg-blue-500 border-l-8 border-blue-950 border-solid text-white top-[3.5rem] rounded-l-md z-50">
        <strong>{alert.type}</strong> : {alert.msg}
      </div>
    )
  );
}

export default Alert;
