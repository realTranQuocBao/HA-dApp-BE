import UserControler from "./../controllers/user.controller.js";

const UserRoute = (app) => {
    app.get("/", UserControler.index);
};

export default UserRoute;
