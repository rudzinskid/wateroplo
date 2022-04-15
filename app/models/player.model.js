module.exports = mongoose => {
  const Player = mongoose.model(
    "player",
    mongoose.Schema(
      {
        meczKod: String,
        zawodnik:
          [
            {
              nazwa: String,
              numerZawodnika: Number,
              czas: Number,
              impact: {
                "sprint": Number,
                "asysta": Number,
                "wywKarny": Number,
                "wywWylotka": Number
              },

              "strzal": {
                "akcja": {
                  "pol": {
                    "bramka": Number,
                    "naBramke": Number,
                    "pudlo": Number
                  },
                  "dob": {
                    "bramka": Number,
                    "naBramke": Number,
                    "pudlo": Number
                  },
                  "kon": {
                    "bramka": Number,
                    "naBramke": Number,
                    "pudlo": Number
                  },
                  "kar": {
                    "bramka": Number,
                    "naBramke": Number,
                    "pudlo": Number
                  }
                }
              },
              straty: {
                pole: {
                  pilka: Number,
                  kontrafaul: Number
                },
                dobijak: {
                  pilka: Number,
                  kontrafaul: Number
                }
              },
              "obrona": {
                "blok": Number,
                "przechwyt": Number,
                "dobijak": Number,
                "zalamanieObronne": Number
              },
              "przewinienia": {
                "wylotka": Number,
                "dobijak": Number,
                "karny": Number
              }
            }

          ]


      }

    )
  );

  return Player;
};