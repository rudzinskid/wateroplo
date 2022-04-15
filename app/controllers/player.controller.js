const db = require("../models");
const Player = db.players;

// Create and Save a new Player
exports.create = (req, res) => {
  // Validate request
  if (!req.body.meczKod) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Player
  const player = new Player({

    meczKod: req.body.meczKod,
    zawodnik: req.body.zawodnik.map(zawodnik => {
      return {
        nazwa: zawodnik.nazwa,
        numerZawodnika: zawodnik.numerZawodnika,
        czas:zawodnik.czas,
        impact:
        {
          sprint: zawodnik.impact.sprint,
          asysta: zawodnik.impact.asysta,
          wywKarny: zawodnik.impact.wywKarny,
          wywWylotka: zawodnik.impact.wywWylotka
        },
        strzal: {
          akcja: {
            pol: {
              bramka: zawodnik.strzal.akcja.pol.bramka,
              naBramke: zawodnik.strzal.akcja.pol.naBramke,
              pudlo: zawodnik.strzal.akcja.pol.pudlo
            },
            dob: {
              bramka: zawodnik.strzal.akcja.dob.bramka,
              naBramke: zawodnik.strzal.akcja.dob.naBramke,
              pudlo: zawodnik.strzal.akcja.dob.pudlo
            },
            kon: {
              bramka: zawodnik.strzal.akcja.kon.bramka,
              naBramke: zawodnik.strzal.akcja.kon.naBramke,
              pudlo: zawodnik.strzal.akcja.kon.pudlo
            },
            kar: {
              bramka: zawodnik.strzal.akcja.kar.bramka,
              naBramke: zawodnik.strzal.akcja.kar.naBramke,
              pudlo: zawodnik.strzal.akcja.kar.pudlo
            }
          }
        },
        straty: {
          pole: {
            pilka: zawodnik.straty.pole.pilka,
            kontrafaul: zawodnik.straty.pole.kontrafaul
          },
          dobijak: {
            pilka: zawodnik.straty.dobijak.pilka,
            kontrafaul: zawodnik.straty.dobijak.kontrafaul
          }
        },
        obrona: {
          blok: zawodnik.obrona.blok,
          przechwyt: zawodnik.obrona.przechwyt,
          dobijak: zawodnik.obrona.dobijak,
          zalamanieObronne: zawodnik.obrona.zalamanieObronne
        },
        przewinienia: {
          wylotka: zawodnik.przewinienia.wylotka,
          dobijak: zawodnik.przewinienia.dobijak,
          karny: zawodnik.przewinienia.karny
        }

      }
    }
    )
  });

  // Save Player in the database
  player
    .save(player)
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

// Retrieve all Player from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Player.find(condition)
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
