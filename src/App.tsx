import Header from './components/Header/Header';
import StatsAndDensity from './components/StatsAndDensity/StatsAndDensity';
import TextareaAndFilters from './components/TextareaAndFilters/TextAreaAndFilters';
import Title from './components/Title/Title';

const App = () => {
  return (
    <main className="min-h-screen w-full bg-theme-light bg-cover bg-center bg-no-repeat dark:bg-theme-dark">
      <div className="p-4 md:px-8 md:py-[18px] lg:mx-auto lg:max-w-[990px] lg:p-8">
        <Header />
        <Title title="Analyze your text in real-time" />
        <TextareaAndFilters />
        <StatsAndDensity />
      </div>
    </main>
  );
};

export default App;
