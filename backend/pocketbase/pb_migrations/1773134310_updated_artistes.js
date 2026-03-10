/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
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
      "Dansant",
      "Traditionnel",
      "Poétique",
      "Chaleureux",
      "Energique"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
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
      "chaleureux",
      "Energique"
    ]
  }))

  return app.save(collection)
})
