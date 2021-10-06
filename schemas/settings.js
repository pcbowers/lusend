import { FaCog } from "react-icons/fa"

export default {
  name: "settings",
  title: "Site Settings",
  type: "document",
  liveEdit: true,
  icon: FaCog,
  custom: {
    singleton: true
  },
  fields: [
    {
      name: "name",
      title: "Site Name",
      description: "The name of your site.",
      type: "string",
      initialValue: "LU Send",
      validation: (Rule) => Rule.required()
    },
    {
      name: "domain",
      title: "Root Domain",
      description: "The root domain of your site.",
      type: "url",
      initialValue: "https://liberty-sa.terradotta.com?go=",
      validation: (Rule) => Rule.required()
    }
  ]
}
