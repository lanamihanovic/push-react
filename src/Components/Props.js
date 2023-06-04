import Naslovna from "./Naslovna";

export default function Props() {
  let obj = {
    mjesto: "Split",
    broj: "021 365 257",
    mail: "dancingbear@gmail.com",
  };
  return (
    <div className="App">
      <Naslovna props={obj} />
    </div>
  );
}
