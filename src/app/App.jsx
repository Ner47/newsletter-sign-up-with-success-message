import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { NotFound, SignUp, Success } from '../pages';

function App() {
  return (
    <main className={styles.page}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
