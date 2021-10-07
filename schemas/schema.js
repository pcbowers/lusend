import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import { internalLink, externalLink } from "./link"
import { basicBlock, advancedBlock } from "./block"
import picture from "./picture"
import settings from "./settings"
import testimonial from "./testimonial"
import sectionTestimonial from "./section.testimonial"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    internalLink,
    externalLink,
    basicBlock,
    advancedBlock,
    picture,
    settings,
    testimonial,
    sectionTestimonial
  ])
})
