import './index.css';
import Nav from './components/nav/Nav';
import Layout from './components/layout/Layout';

function App() {


    return (
      <div className="App bg-slate-300 min-h-screen">
        <Nav />
        <Layout />
        <div className='text-center text-slate-600 py-5'>Made with ❤️ by Cipherr</div>
      </div>
    );
}

export default App;
