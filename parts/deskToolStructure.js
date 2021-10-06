import S from "@sanity/desk-tool/structure-builder"
import schema from "../schemas/schema"

const schemas = schema._original.types
const singletons = schemas.filter((type) => type?.custom?.singleton)

const createSingleton = (schema) => {
  return S.listItem()
    .title(schema.title)
    .icon(schema.icon)
    .child(S.document().schemaType(schema.name).documentId(schema.name))
}

export default () => {
  return S.list()
    .title("Site Content")
    .items([
      ...singletons.map((singleton) => createSingleton(singleton)),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletons.find((type) => type.name === item.getId())
      )
    ])
}
