import { FaLink, FaExternalLinkAlt } from "react-icons/fa"

export const internalLink = {
  name: "internalLink",
  type: "object",
  icon: FaLink,
  title: "Internal link",
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      to: [{ type: "testimonial" }]
    }
  ]
}

export const externalLink = {
  name: "externalLink",
  type: "object",
  icon: FaExternalLinkAlt,
  title: "External link",
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
      validation: (Rule) =>
        Rule.regex(
          /https?:\/\/(?:www\.)?(?:liberty-sa\.terradotta\.com|liberty\.edu\/send)\/?.*/gi,
          { name: "internal url", invert: true }
        ).warning(
          `This is not an external link. Consider using internal links instead.`
        )
    },
    {
      title: "Open in new tab",
      name: "blank",
      description: "Read https://css-tricks.com/use-target_blank/",
      type: "boolean"
    }
  ]
}
