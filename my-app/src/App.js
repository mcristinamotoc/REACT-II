import Teatre from "./teatre.json";
export default () => {
  return (
    <div>
      {Teatre.map((item, index) => {
        return (
          <div>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};
