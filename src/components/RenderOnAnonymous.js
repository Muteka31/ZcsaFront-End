import UserService from "../redux/services/UserService";

const RenderOnAnonymous = ({ children }) => (!UserService.isLoggedIn()) ? children : null;

export default RenderOnAnonymous
