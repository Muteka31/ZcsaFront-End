import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import AdminSidebar from "../../components/adminSidebar";
import {managerRoutes} from "../../routes";
import sidebarImage from "../../utils/images/kazungula-bridge.jpg";

function ManagerDashboard() {
    const [image] = React.useState(sidebarImage);
    const [color] = React.useState("unique-color");
    const [hasImage] = React.useState(true);
    const location = useLocation();
    const mainPanel = React.useRef(null);

    const getRoutes = (managerRoutes) => {
        return managerRoutes.map((prop, key) => {
            if (prop.layout === "/manager-dashboard") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                    //<Redirect from="/" to="/admin/dashboard" />
                );
            } else {
                return null;
            }
        });
    };
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            let element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location]);
    return (
        <div className="wrapper">
            <AdminSidebar color={color} image={hasImage ? image : ""} routes={managerRoutes} />
            <div className="main-panel" ref={mainPanel}>
                <div className="content">
                    <Switch>{getRoutes(managerRoutes)}</Switch>
                </div>
            </div>
        </div>
    );
}

export default ManagerDashboard;