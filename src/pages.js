const Database = require("./database/db");
const saveAboutLocation = require("./database/saveAboutLocation");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async aboutLocation(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM location WHERE id = "${id}"`);
      const aboutLocation = results[0];

      aboutLocation.images = aboutLocation.images.split(",");
      aboutLocation.firstImage = aboutLocation.images[0];

      // if ternário
      if (aboutLocation.open_on_weekends == "0") {
        aboutLocation.open_on_weekends = false;
      } else {
        aboutLocation.open_on_weekends = true;
      }

      return res.render("about-location", { aboutLocation });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  async location(req, res) {
    try {
      const db = await Database;
      const location = await db.all("SELECT * FROM location");
      return res.render("location", { location });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createLocation(req, res) {
    return res.render("create-location");
  },

    async saveAboutLocation(req, res) {
    const fields = req.body

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes('')) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      // salvar um local
    const db = await Database;
    await saveAboutLocation(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirecionamento
      return res.redirect("/location");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
