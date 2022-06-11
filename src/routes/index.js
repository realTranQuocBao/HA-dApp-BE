import UserControler from "./../controllers/user.controller.js";

const routes = (app) => {
    // setup routes
    app.use("/api/v1/user", UserControler.index);

    // /
    app.use("/api/v1", (req, res) => res.send("HA dApp Backend - From IT Club with ❤️"));
};

export default routes;
