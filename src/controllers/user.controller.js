// import UserModel

const index = (req, res) => {
    res.status(200).send({
        status: 200,
        data: [],
        infor: "User Route"
    });
};

const UserControler = {
    index
};

export default UserControler;
