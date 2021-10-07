import { FaUserCircle } from "react-icons/fa"
import { pictureSelection, pictureMedia } from "./picture"

export default {
  name: "testimonial",
  title: "Testimonials",
  custom: {
    singular: "Testimonial"
  },
  type: "document",
  liveEdit: true,
  icon: FaUserCircle,
  fields: [
    {
      name: "name",
      title: "Name",
      description: "The name of the person providing the testimonial.",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "location",
      title: "Location",
      description:
        "The location where this person went (i.e. Israel, England, Mexico, Ecuador).",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "sponsor",
      title: "Sponsor",
      description:
        "The sponsor of the trip (i.e. G5, FIRM Conference, Psychology).",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "quote",
      title: "Quote",
      description: "A short 1-2 sentence excerpt from the full testimony.",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "quoteFull",
      title: "Full Testimonial",
      description: "The full, written testimonial.",
      type: "basicBlock",
      validation: (Rule) => Rule.required()
    },
    {
      name: "profilePicture",
      title: "Profile Picture",
      description: "A picture of the person providing the testimonial.",
      type: "picture",
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote",
      ...pictureSelection("profilePicture")
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle,
        media: pictureMedia(
          selection,
          `Testimonial Profile Picture for ${title}`
        )
      }
    }
  }
}
