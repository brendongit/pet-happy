const Database = require('./db');
const saveAboutLocation = require('./saveAboutLocation');

Database.then(async (db) => {
//     // inserir dados na tabela 
   await saveAboutLocation(db, {
    lat: "-22.9277209",
    lng: "-43.686198",
    name: "lar ribeiro",
    about: "skdo aopskd paoskdaspo dkasp odkas dokaspodkaaposkd aspod",
    whatsapp: "0192301212",
    images: [
        "https://images.unsplash.com/photo-1598799671137-b4263a17dd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWQ6NXx8fHx8fDE2NDU0NjcyMzI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        
        "https://images.unsplash.com/photo-1598136490929-292a0a7890c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWQ6NXx8fHx8fDE2NDU0NjcyNzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
    ].toString(),
    instructions: "Venha conhecer e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até as 20h",
    open_on_weekends: "1",
},)

    // consultar dados da tabela
     const selectedLocation = await db.all("SELECT * FROM location")
     console.log(selectedLocation)

    // consultar somente 1 local, pelo ID
    const aboutLocation = await db.all('SELECT * FROM location WHERE id = "3"')
    console.log(aboutLocation)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM location WHERE id='4'"))
    // console.log(await db.run("DELETE FROM location WHERE id='5'"))
})