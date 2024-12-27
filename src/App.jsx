import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Info />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
