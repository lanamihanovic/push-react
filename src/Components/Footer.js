export default function Footer() {
  return (
    <div className="App">
      <Footer />
      <p>
        <a href="https://dancingbear.hr/en/"> dancing bear </a>
      </p>
      <form action="Submit.html" method="get" class="form">
        ime: <input type="text" name="mate" id="ime" required />
        <br />
        prezime: <input type="text" name="matic" id="prez" />
        <br />
        broj telefona: <input type="tel" name="+385..." id="mob" />
        <br />
        email: <input type="email" name="e@mail" id="mejl" required />
        <br />
        lozinka:
        <input type="password" required />
        <br />
        mjesto stanovanja:
        <br />
        <input type="checkbox" id="misto1" name="misto" />
        <label for="misto1"> split</label>
        <br />
        <input type="checkbox" id="misto2" name="misto2" />
        <label for="misto2"> rijeka</label>
        <br />
        <input type="checkbox" id="misto3" name="misto3" />
        <label for="misto3"> zagreb</label>
        <br />
        <input type="checkbox" id="misto4" name="misto4" />
        <label for="misto4"> osijekt</label>
        <br />
        <br />
        <input type="reset" value="reset">
          <input type="submit" value="submit" />
        </input>
      </form>
    </div>
  );
}
