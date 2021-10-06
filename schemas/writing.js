import React from "react"
import { FaExternalLinkAlt, FaLink } from "react-icons/fa"
import { FaPencilAlt, FaPalette } from "react-icons/fa"
import {
  MdOutlineFormatColorText,
  MdOutlineFormatColorFill
} from "react-icons/md"

const LinkRenderer = (props) => {
  return (
    <>
      <FaExternalLinkAlt size=".8em" style={{ paddingRight: "0.2em" }} />
      <span style={{ color: "#5b6fba" }}>{props.children}</span>
    </>
  )
}

const PageRenderer = (props) => {
  return (
    <>
      <FaLink size=".8em" style={{ paddingRight: "0.2em" }} />
      <span style={{ color: "#5b6fba" }}>{props.children}</span>
    </>
  )
}

const ColorRenderer = (props) => {
  return (
    <span
      style={{
        color: `hsla(${props.hsl.h},${props.hsl.s * 100}%,${
          props.hsl.l * 100
        }%,${props.hsl.a})`
      }}
    >
      {props.children}
    </span>
  )
}

const BackgroundRenderer = (props) => {
  return (
    <span
      style={{
        backgroundColor: `hsla(${props.hsl.h},${props.hsl.s * 100}%,${
          props.hsl.l * 100
        }%,${props.hsl.a})`
      }}
    >
      {props.children}
    </span>
  )
}

export default {
  name: "writing",
  title: "Writings",
  type: "object",
  icon: FaPencilAlt,
  custom: {
    singular: "Writing"
  },
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" }
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike-Through", value: "strike-through" },
              { title: "Code", value: "code" }
            ],
            annotations: [
              {
                name: "link",
                title: "External Link",
                type: "externalLink",
                blockEditor: { render: LinkRenderer }
              },
              {
                name: "page",
                title: "Internal Link",
                type: "internalLink",
                blockEditor: { render: PageRenderer }
              },
              {
                name: "background",
                icon: MdOutlineFormatColorFill,
                title: "Background",
                type: "color",
                blockEditor: { render: BackgroundRenderer },
                initialValue: { hsl: { h: 0, s: 0, l: 1, a: 1 } }
              },
              {
                name: "color",
                icon: MdOutlineFormatColorText,
                title: "Text Color",
                type: "color",
                blockEditor: { render: ColorRenderer },
                initialValue: { hsl: { h: 0, s: 0, l: 0, a: 1 } }
              }
            ]
          }
        }
      ]
    }
  ]
}
