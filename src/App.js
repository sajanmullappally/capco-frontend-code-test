import ErrorBoundary from "./components/ErrorBoundary";
import Payments from "./views/payments";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Payments />
      </ErrorBoundary>
    </div>
  );
}

export default App;
