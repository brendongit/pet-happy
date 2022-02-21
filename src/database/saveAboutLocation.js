function saveAboutLocation(db, aboutLocation) {
  return db.run(`
    INSERT INTO location (
        lat, 
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    
    ) VALUES (
        "${aboutLocation.lat}",
        "${aboutLocation.lng}",
        "${aboutLocation.name}",
        "${aboutLocation.about}",
        "${aboutLocation.whatsapp}",
        "${aboutLocation.images}",
        "${aboutLocation.instructions}",
        "${aboutLocation.opening_hours}",
        "${aboutLocation.open_on_weekends}"

    );
`);
}

module.exports = saveAboutLocation;
