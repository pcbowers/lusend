import React from "react"
import { FaImage } from "react-icons/fa"

export default {
  name: "picture",
  title: "Picture",
  type: "object",
  icon: FaImage,
  fields: [
    {
      name: "picture",
      title: "Picture",
      description:
        "A picture to be displayed on the website, inputted as a URL.",
      type: "url",
      initialValue: "https://source.unsplash.com/900x900/?portrait,face",
      validation: (Rule) => Rule.required()
    },
    {
      name: "position",
      title: "Hotspot",
      description: "Select a hotspot for this picture.",
      type: "string",
      initialValue: "50% 50%",
      options: {
        list: [
          { title: "Left Top", value: "0% 0%" },
          { title: "Left Center", value: "0% 50%" },
          { title: "Left Bottom", value: "0% 100%" },
          { title: "Right Top", value: "100% 0%" },
          { title: "Right Center", value: "100% 50%" },
          { title: "Right Bottom", value: "100% 100%" },
          { title: "Center Top", value: "50% 0%" },
          { title: "Center Center", value: "50% 50%" },
          { title: "Center Bottom", value: "50% 100%" },
          { title: "Custom Hotspot", value: "custom" }
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "positionX",
      title: "Custom Hotspot X",
      description: "Input a number between 0 and 100 to define the X position.",
      type: "number",
      initialValue: 50,
      hidden: ({ parent }) => parent?.position !== "custom",
      validation: (Rule) =>
        Rule.custom((field, { parent }) =>
          parent.position === "custom" && field === undefined
            ? "Required"
            : true
        )
          .min(0)
          .max(100)
    },
    {
      name: "positionY",
      title: "Custom Hotspot Y",
      description: "Input a number between 0 and 100 to define the Y position.",
      type: "number",
      initialValue: 50,
      hidden: ({ parent }) => parent?.position !== "custom",
      validation: (Rule) =>
        Rule.custom((field, { parent }) => {
          return parent.position === "custom" && field === undefined
            ? "Required"
            : true
        })
          .min(0)
          .max(100)
    }
  ]
}

export const pictureSelection = (name, prefix = "") => {
  return {
    [`${prefix}picture`]: `${name}.picture`,
    [`${prefix}position`]: `${name}.position`,
    [`${prefix}positionX`]: `${name}.positionX`,
    [`${prefix}positionY`]: `${name}.positionY`
  }
}

export const pictureMedia = (
  selection,
  alt = "Picture",
  prefix = "",
  borderRadius = "0"
) => {
  return (
    <img
      src={selection[`${prefix}picture`]}
      style={{
        width: "100%",
        aspectRatio: "1/1",
        objectFit: "cover",
        objectPosition:
          selection[`${prefix}position`] !== "custom"
            ? selection[`${prefix}position`]
            : `${selection[`${prefix}positionX`]}% ${
                selection[`${prefix}positionY`]
              }%`,
        borderRadius
      }}
      alt={alt}
    />
  )
}
