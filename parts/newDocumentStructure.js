import S from "@sanity/base/structure-builder"
import schema from "../schemas/schema"

const schemas = schema._original.types
const singletons = schemas.filter((type) => type?.custom?.singleton)

export default [
  ...S.defaultInitialValueTemplateItems()
    // remove singletons from the 'new document' dialog
    .filter((item) => !singletons.find((type) => type.name === item.getId()))
    .map((item) => {
      // get the type from the schema and set it's name to the singular version if available
      const currentType = schemas.find((type) => type.name === item.getId())
      return item.title(currentType?.custom?.singular || item.getTitle())
    })
]
