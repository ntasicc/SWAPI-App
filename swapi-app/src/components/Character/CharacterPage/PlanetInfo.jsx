const PlanetInfo = (props) => {
  return (
    <div className="flex justify-center mt-16">
      <img
        className="w-64 animate-pulse"
        src="https://www.svgrepo.com/show/76881/planet-saturn.svg"
        alt="Random planet"
      ></img>
      <div className="mx-20">
        <p className="text-white mt-16">
          <span className="italic text-amber-100 mr-1">Name: </span>
          {props.planet.name}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Rotation period: </span>
          {props.planet.rotation_period}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Orbital period: </span>
          {props.planet.orbital_period}{" "}
        </p>
        <p className="text-white">
          <span className="italic text-amber-100 mr-1">Gravity: </span>
          {props.planet.gravity}{" "}
        </p>
      </div>
    </div>
  );
};

export default PlanetInfo;
