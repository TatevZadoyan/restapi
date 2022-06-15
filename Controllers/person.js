const getMany = (req, res, next) => {
    res.json([{
            "id": 1,
            "name": "Anna",
            "conutry": "Brazil"
        },
        {
            "id": 2,
            "name": "Areg",
            "conutry": "Australia"
        },
        {
            "id": 3,
            "name": "Alex",
            "conutry": "USA"
        },
        {
            "id": 4,
            "name": "Adessa",
            "conutry": "Japan"
        }
    ]);
    next();
}

const getOne = (req, res, next) => {
    res.send(req.params.id);
    next();
}



module.exports = { getMany, getOne };