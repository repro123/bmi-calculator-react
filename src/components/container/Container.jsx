function Container({ classNames, children }) {
  return <div className={`mx-auto container ${classNames}`}>{children}</div>;
}

export default Container;
