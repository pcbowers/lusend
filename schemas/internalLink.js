import { FaLink } from "react-icons/fa"

export default {
  name: "internalLink",
  type: "object",
  icon: FaLink,
  title: "Internal link",
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      to: [{ type: "test" }]
    }
  ]
}
