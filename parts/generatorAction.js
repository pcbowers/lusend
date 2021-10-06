import React from "react"
import styled from "styled-components"
import { FaFile, FaClipboard, FaCheck } from "react-icons/fa"

const Padding = styled.div`
  padding: 1em;
`

const Button = styled.a`
  height: 2em;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover > ${IconHolder} {
    background: #103a7a;
  }

  &:hover > ${IconHolder}[data-copied="true"] {
    background: #28a430;
  }
`

const Input = styled.input`
  padding: 0.5em;
  cursor: pointer;
  height: 100%;
  width: 10em;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  background: rgb(224, 224, 224);
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  text-overflow: ellipsis;
`

const IconHolder = styled.div`
  padding: 0 0.5em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a254d;
  transition: all 0.1s ease-in-out;
  &[data-copied="true"] & {
    background-color: #1e7d27;
  }
`

export default function GenerateAction(props) {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const [text, setText] = React.useState("TODO")

  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    navigator.clipboard.writeText(text)
  }

  return {
    label: "Generate Page",
    icon: (
      <FaFile
        style={{ padding: ".1em", boxSizing: "border-box" }}
        data-sanity-icon={true}
      />
    ),
    shortcut: "ctrl+alt+s",
    onHandle: async () => {
      // setText("text")
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      type: "popover",
      onClose: () => {
        setDialogOpen(false)
        props.onComplete()
      },
      content: (
        <Padding>
          <Button href="#" role="button" onClick={copy}>
            <Input type="text" value={text} disabled={true} />
            <IconHolder data-copied={copied}>
              {!copied ? <FaClipboard /> : <FaCheck />}
            </IconHolder>
          </Button>
        </Padding>
      )
    }
  }
}
