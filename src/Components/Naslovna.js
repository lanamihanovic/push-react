import Footer from "./Footer";

function Naslovna({ props }) {
  return (
    <div className="App">
      <br />
      <Footer>
        {props.mjesto}
        <br />
        {props.broj}
        <br />
        {props.mail}
      </Footer>
    </div>
  );
}

export default Naslovna;
