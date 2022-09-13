const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "movie.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE movie (
            movieId INTEGER PRIMARY KEY,
            movieName TEXT,
            movieDescription TEXT,
            movieCategory TEXT,
            movieImg TEXT
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                //let insert = 'INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)'
                db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)'   ,
                ["BirdBox", "In the wake of an unknown global terror, a mother must find the strength to flee with her children down a treacherous river in search of safety. Due to unseen deadly forces, the perilous journey must be made blindly. Directed by Emmy winner Susanne Bier, Bird Box is a thriller starring Academy Award winner Sandra Bullock, John Malkovich, Sarah Paulson, and Trevante Rhodes.", "Popular", "BB.jpg"])

                db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)'   ,
                ["LittleMan", "After leaving prison, dwarf criminal Calvin Sims joins his moron brother Percy to steal an expensive huge diamond for the mobster Walken. They are chased by the police, and Calvin hides the stone in the purse of executive Vanessa Edwards, whose husband Darryl Edwards wants them to have a baby. Percy convinces Calvin to dress like a baby and be left in front of the Edwards' house to get inside it and retrieve the diamond. Darryl and Vanessa keep Calvin for the weekend and decide to adopt him, while Walken threatens Darryl to get the stone back.", "Recent added", "LM.jpg"])

                db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)'   ,
                ["Shutter Island","In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals escape in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.",
            "Recent added", "SI.jpg"])

            db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)' ,
            ["White Chicks","After an unsuccessful mission, FBI agents Kevin and Marcus Copeland fall into disgrace at the agency. They decide to work undercover on an abduction case disguised as Brittany and Tiffany Wilson, the vain, spoiled white daughters of a tycoon.", "Highest Rated", "WC.jpg"])

            db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)',
            ["Sonic the hedgehog", "Based on the global blockbuster videogame franchise from Sega, SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend Tom (James Marsden) team up to defend the planet from the evil genius Dr. Robotnik (Jim Carrey) and his plans for world domination. The family-friendly film also stars Tika Sumpter and Ben Schwartz as the voice of Sonic.",
            "Highest rated", "SH.jpg"])

            db.run('INSERT INTO movie (movieName, movieDescription, movieCategory,movieImg) VALUES (?,?,?,?)'   ,
            ["Frozen", "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven and sets off on an epic journey to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom. From the outside Elsa looks poised, regal and reserved, but in reality she lives in fear as she wrestles with a mighty secret: she was born with the power to create ice and snow. It's a beautiful ability, but also extremely dangerous. Haunted by the moment her magic nearly killed her younger sister Anna, Elsa has isolated herself, spending every waking minute trying to suppress her growing powers. Her mounting emotions trigger the magic, accidentally setting off an eternal winter that she can't stop. She fears she's becoming a monster and that no one, not even her sister, can help her.",
            "Popular", "Frozen.jpg"])
            }

        })
    }
})


module.exports = db

