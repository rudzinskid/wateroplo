module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        matchCode: String,
        przewaga: 
          [
            {
              numerZagrywki: Number,
              numerZawodnika: Number,
              czyTrafiona: String
            }
          ]
        
      }
    )
  );

  return Tutorial;
};