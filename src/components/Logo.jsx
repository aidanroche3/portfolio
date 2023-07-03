function Logo(props) {
  const name = props.name;
  const icon = props.icon;

  return (
    <>
      <div className="tooltip tooltip-top" data-tip={name}>
        <img
          className="h-24 sm:h-32 w-24 sm:w-32 pt-2 hover:scale-110 ease-in duration-200"
          src={icon}
          alt={name}
        />
      </div>
    </>
  );
}

export default Logo;
