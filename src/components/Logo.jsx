function Logo(props) {
  const name = props.name;
  const icon = props.icon;

  return (
    <>
      <div className="object-none">
        <div className="tooltip tooltip-top" data-tip={name}>
          <img
            className="sm:h-24 h-32 sm:w-24 w-32 pt-2 hover:scale-110 ease-in duration-200"
            src={icon}
            alt={name}
          />
        </div>
      </div>
    </>
  );
}

export default Logo;
