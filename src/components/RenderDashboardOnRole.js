import React from 'react';
import PropTypes from 'prop-types'
import UserService from "../redux/services/UserService";


const RenderDashboardOnRole = ({ roles, children }) => 
{
    // switch(roles) {
    //     case 'inspector':
    //         //React.Children.toArray(children)[2]
    //         return React.Children.toArray(children)[0];
    //       break;
    //     case 'sys_admin':
    //       // React.Children.toArray(children)[2]
    //         return React.Children.toArray(children)[1]; 
    //       break;
    //     default:
            
    //   }
        //console.log();
        if(roles[0] == 'inspector'){
            return React.Children.toArray(children)[2] 
        }

        if(roles[0] == 'sys_admin'){
            return React.Children.toArray(children)[2] 
        }

}


//(UserService.hasRole(roles)) ? children : null;

RenderDashboardOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderDashboardOnRole
