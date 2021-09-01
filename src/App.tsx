import { FC } from 'react';
import Layout from './components/Layout';
import Routes from './routes';
import './App.css';

const App: FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
