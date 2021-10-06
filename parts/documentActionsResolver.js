import {
  DeleteAction,
  DuplicateAction
} from "part:@sanity/base/document-actions"
import schema from "../schemas/schema"
import GenerateAction from "./generatorAction"

const schemas = schema._original.types
const singletons = schemas.filter((type) => type?.custom?.singleton)
const generators = schemas.filter((type) => type?.custom?.generator)

export default function resolveDocumentActions(props) {
  let actions = [] // default actions

  // actions that non-singletons should have
  if (!singletons.find((type) => type.name === props.type))
    actions = [DeleteAction, DuplicateAction, ...actions]

  // actions that generators should have
  if (generators.find((type) => type.name === props.type))
    actions = [GenerateAction, ...actions]

  return actions
}
