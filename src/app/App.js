
import './App.css';
import FirstSection from '../sections/FirstSection/FirstSection';
import LineContent from '../sections/lineContent/LineContent';
import NFTSection from '../sections/NFTSection/NFTSection';
import TeamSection from '../sections/TeamProvideSection/TeamSection';

function App() {
  return (
    <div className="App">
        <FirstSection/>
        <LineContent/>
        <NFTSection/>
        <TeamSection/>
    </div>
  );
}

export default App;
