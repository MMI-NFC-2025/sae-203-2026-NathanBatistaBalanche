/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select746448482",
    "maxSelect": 2,
    "name": "style_de_musique",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Folk",
      "Bal",
      "Rock",
      "Pop"
    ]
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2562733669",
    "maxSelect": 2,
    "name": "mood_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "dansant",
      "traditionnel",
      "poétique",
      "chaleureux"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("select746448482")

  // remove field
  collection.fields.removeById("select2562733669")

  return app.save(collection)
})
