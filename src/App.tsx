import { CssBaseline } from '@mui/material';
import './App.css';
import { MainLayout } from './layouts/Main.layout';
import { Projects } from './pages/Projects.page';

function App() {
    return (
        <MainLayout>
            <CssBaseline />
            <Projects />
        </MainLayout>
    );
}

export default App;
