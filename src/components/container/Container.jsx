function Container({ classNames, children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl p-4 ${classNames}`}>
      {children}
    </div>
  );
}

export default Container;
