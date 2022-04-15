module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        matchCode: { type: String },
        przewaga: {
          type: [
            {
              numerZagrywki: { type: Number },
              numerZawodnika: { type: Number },
              czyTrafiona: { type: String }
            }
          ]
        }
      }
    )
  );

  return Tutorial;
};