import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoreService from "./redux/services/StoreService";
import SystemAdminDashboard from './pages/dashboard/systemAdminDashboard';
import InspectorDashboard from './pages/dashboard/inspectorDashboard';
import SeniorInspectorDashboard from './pages/dashboard/seniorInspectorDashboard';
import ManagerDashboard from './pages/dashboard/managerDashboard';
import RenderOnRole from "./components/RenderOnRole";


const store = StoreService.setup();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Router>
          <RenderOnRole roles={['manager']}>
                <ManagerDashboard/>
          </RenderOnRole>
          <RenderOnRole roles={['snr_inspector']}>
                <SeniorInspectorDashboard/>
          </RenderOnRole>
          <RenderOnRole roles={['inspector']}>
                <InspectorDashboard/>
          </RenderOnRole>
          <RenderOnRole roles={['sys_admin']}>
                <SystemAdminDashboard/>
          </RenderOnRole>
        </Router>     
    </BrowserRouter>
  </Provider>
);

export default App;
