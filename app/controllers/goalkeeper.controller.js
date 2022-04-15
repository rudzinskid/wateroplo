const db = require("../models");
const Goalkeeper = db.goalkeepers;

// Create and Save a new Player
exports.create = (req, res) => {
    // Validate request
    if (!req.body.meczKod) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Goalkeeper
    const goalkeeper = new Goalkeeper({

        meczKod: req.body.meczKod,
        bramkarz: req.body.bramkarz.map(bramkarz => {
            return {
                nazwa: bramkarz.nazwa,
                numerBramkarza: bramkarz.numerBramkarza,
                czas: bramkarz.czas,
                pole: {
                    bramka: bramkarz.pole.bramka,
                    naBramke: bramkarz.naBramke,
                    pudlo: bramkarz.pudlo
                },
                dobijak: {
                    bramka: bramkarz.dobijak.bramka,
                    naBramke: bramkarz.dobijak.naBramke,
                    pudlo: bramkarz.dobijak.pudlo
                },
                przewagaBramkarz: {
                    bramka: bramkarz.przewagaBramkarz.bramka,
                    naBramke: bramkarz.przewagaBramkarz.naBramke,
                    pudlo: bramkarz.przewagaBramkarz.pudlo
                },
                kontra: {
                    bramka: bramkarz.kontra.bramka,
                    naBramke: bramkarz.kontra.naBramke,
                    pudlo: bramkarz.kontra.pudlo
                }




            }
        }
        )
    });

    // Save goalkeeper in the database
    goalkeeper
        .save(goalkeeper)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all goalkeeper from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Goalkeeper.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
