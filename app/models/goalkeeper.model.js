module.exports = mongoose => {
    const Goalkeeper = mongoose.model(
        "goalkeeper",
        mongoose.Schema(
            {
                meczKod: String,
                bramkarz: [
                    {
                        nazwa: String,
                        numerBramkarza: Number,
                        sprint: Number,
                        asysta: Number,
                        czas: Number,
                        pole: {
                            "bramka": Number,
                            "naBramke": Number,
                            "pudlo": Number
                        },
                        dobijak: {

                            "bramka": Number,
                            "naBramke": Number,
                            "pudlo": Number
                        },
                        przewagaBramkarz:
                        {

                            "bramka": Number,
                            "naBramke": Number,
                            "pudlo": Number
                        }
                        ,
                        kontra: {

                            "bramka": Number,
                            "naBramke": Number,
                            "pudlo": Number
                        }
                    }
                ]
            }

        )
    );
    return Goalkeeper;
};