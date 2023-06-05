import Footer from "./Footer";
import Header from "./Header";

function Naslovna({ props }) {
  return (
    <div className="App">
      <Header />

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
