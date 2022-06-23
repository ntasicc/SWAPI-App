const CharacterInfoDisplay = (props) => {
  return (
    <div className="border-solid border-yellow-300 flex flex-col bg-stone-800 text-white rounded-3xl border-2 p-2 shadow-black shadow-md m-auto mt-10 w-2/5">
      <h1 className="text-center text-amber-500 mt-3 text-4xl">
        {props.characterData.name}
      </h1>
      <div className="flex max-w-fit mx-auto mt-6 mb-6">
        <GroupContainer
          text1={"Height:  "}
          data1={props.characterData.height}
          text2={"Mass:  "}
          data2={props.characterData.mass}
          text3={"Hair color:  "}
          data3={props.characterData.hair_color}
          text4={"Skin color:  "}
          data4={props.characterData.skin_color}
        ></GroupContainer>
        <GroupContainer
          text1={"Eye color:  "}
          data1={props.characterData.eye_color}
          text2={"Birth year:  "}
          data2={props.characterData.birth_year}
          text3={"Gender:  "}
          data3={props.characterData.gender}
        ></GroupContainer>
      </div>
    </div>
  );
};

const GroupContainer = (props) => {
  return (
    <div className="text-left mx-20 my-auto">
      <p className="mb-1">
        <span className="text-gray-300 italic mr-1">{props.text1} </span>
        {props.data1}
      </p>
      <p className="mb-1">
        <span className="text-gray-300 italic  mr-1">{props.text2}</span>
        {props.data2}
      </p>
      <p className="mb-1">
        <span className="text-gray-300 italic  mr-1">{props.text3}</span>
        {props.data3}
      </p>
      <p className="mb-1">
        <span className="text-gray-300 italic  mr-1">{props.text4}</span>
        {props.data4}
      </p>
    </div>
  );
};

export default CharacterInfoDisplay;
