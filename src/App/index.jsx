import React from 'react';
import './index.less';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import appStore from '@/stores/AppStore';
import modeStore from '@/stores/ModeStore';
import BasicLayout from '../BasicLayout';

function App() {
    return (
        <Provider appStore={appStore} modeStore={modeStore}>
            <HashRouter>
                <Switch key="bas">
                    <Route path="/" render={(props) => <BasicLayout {...props} />} />
                </Switch>
            </HashRouter>
        </Provider>
    );
}
export default App;
