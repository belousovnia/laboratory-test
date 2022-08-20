import FifthSection from "./components/FifthSection";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import SixthSection from "./components/SixthSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="app">
      <Header/>
      <article>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
      </article>
      <footer className="footer">
        <h1>
          © 2021 Лаборатория интернет
        </h1>
      </footer>
    </div>
  );
}

export default App;
