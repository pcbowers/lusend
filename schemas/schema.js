import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import internalLink from "./internalLink"
import externalLink from "./externalLink"
import writing from "./writing"
import settings from "./settings"
import test from "./test"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    internalLink,
    externalLink,
    writing,
    settings,
    test
  ])
})
