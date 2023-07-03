function Logo(props) {
  const name = props.name;
  const icon = props.icon;

  return (
    <>
      <div
        className="tooltip sm:h-20 h-10 sm:w-20 w-10 pt-2 m-0 p-0"
        data-tip={name}
      >
        <img
          className="sm:h-20 h-10 sm:w-20 w-10 hover:scale-110 ease-in duration-200"
          src={icon}
          alt={name}
        />
      </div>
    </>
  );
}

export default Logo;
