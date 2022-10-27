import React, { lazy, Suspense } from 'react';
import Header from './components/header/Header';
import Loading from './shared/Loading';
import ErrorBoundary from './shared/ErrorBoundary';

const PruductDetail = lazy(() => import('./page/ProductDetail'));

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loading size={40} />}>
          <PruductDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
