import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoaderProvider } from './core/context/Loader/LoaderContext';
import Loader from './components/Loader';
import { AlertProvider } from './core/context/Alert/AlertContext';
import { VcardDemoProvider } from './core/context/Vcard/VcardDemoProvider';
import View from './pages/View';
import Editor from './pages/Editor';
import { VIEW_PATH, EDIT_PATH } from './core/variables';

function App() {
    const root = document.getElementById('root');
    const logoutUrl = root ? root.getAttribute('data-logout') : '';
    const defaultUserpic = root ? root.getAttribute('data-userpic') : '';

    return (
        <div id="app" className="app">
            <LoaderProvider>
                <AlertProvider logoutUrl={ logoutUrl }>
                    <VcardDemoProvider 
                        defaultUserpic={ defaultUserpic }>
                        <Loader />
                        <HashRouter>
                            <Switch>
                                <Route path={ VIEW_PATH } exact component={ View } />
                                <Route path={ EDIT_PATH } render={ (props) => (
                                    <Editor {...props} logoutUrl={ logoutUrl } />
                                ) } />
                            </Switch>
                        </HashRouter>
                    </VcardDemoProvider>
                </AlertProvider>
            </LoaderProvider>
        </div>
    );
}

export default App;
