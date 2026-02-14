import { Route, Routes } from 'react-router-dom';
import stales from './App.module.css';
import { SignUp } from '../pages';

const SubscribeForm = () => <h1>Subscribe</h1>;
const Success = () => <h1>Success</h1>;
const NotFound = () => <h1>404</h1>;

function App() {
  return (
    <main className={stales.page}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
