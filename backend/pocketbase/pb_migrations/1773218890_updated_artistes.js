/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "28aout",
      "29aout",
      "30aout"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "28aout",
      "29aout",
      "30aout"
    ]
  }))

  return app.save(collection)
})
