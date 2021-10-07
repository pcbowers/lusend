import React from "react"
import { FaUserFriends } from "react-icons/fa"
import { Grid, Flex, Box, Heading, Text } from "@sanity/ui"
import { pictureSelection, pictureMedia } from "./picture"

function TestimonialPreview({ value }) {
  if (!value) return <></>
  return (
    <>
      {/* If No References selected, output this */}
      {value.count === 0 && (
        <Flex height="fill" padding={4}>
          <Heading as="h5" size={1}>
            No References Selected
          </Heading>
        </Flex>
      )}
      {/* Output grid with items */}
      {!!value.count && (
        <Grid columns={3} gap={1} padding={1} marginTop={6}>
          {value.testimonials
            ?.filter(({ name }) => !!name)
            ?.map((testimonial) => {
              return (
                <>
                  <Flex direction="column" padding={1} gap={2}>
                    {/* Output the Profile Picture */}
                    {testimonial.picture}
                    {/* Output the Name of the Testimonial */}
                    <Heading as="h5" size={1} align="center">
                      {testimonial.name}
                    </Heading>
                    {/* Output the short quote */}
                    <Text size={1} align="center">
                      {testimonial.quote}
                    </Text>
                  </Flex>
                </>
              )
            })}
          {/* If there are more than 3, add a short note at the bottom */}
          {value.count > 3 && (
            <Box column="full" padding={1} paddingTop={3}>
              <Text size={3} align="center">
                <em>...(And {value.count - 3} more)</em>
              </Text>
            </Box>
          )}
        </Grid>
      )}
    </>
  )
}

export default {
  name: "section.testimonial",
  title: "Testimonial Sections",
  type: "object",
  icon: FaUserFriends,
  custom: {
    singular: "Testimonial Section"
  },
  fields: [
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      options: {
        layout: "grid",
        columns: 3
      },
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial" }]
        }
      ],
      validation: (Rule) => Rule.required().unique()
    }
  ],
  preview: {
    select: {
      name1: "testimonials.0.name",
      name2: "testimonials.1.name",
      name3: "testimonials.2.name",
      quote1: "testimonials.0.quote",
      quote2: "testimonials.1.quote",
      quote3: "testimonials.2.quote",
      references: "testimonials",
      ...pictureSelection("testimonials.0.profilePicture", "first"),
      ...pictureSelection("testimonials.1.profilePicture", "second"),
      ...pictureSelection("testimonials.2.profilePicture", "third")
    },
    prepare(selection) {
      return {
        count: !selection.references
          ? 0
          : Object.keys(selection.references).length,
        testimonials: [
          {
            name: selection.name1,
            quote: selection.quote1,
            picture: pictureMedia(
              selection,
              "First Testimonial Picture",
              "first",
              "50%"
            )
          },
          {
            name: selection.name2,
            quote: selection.quote2,
            picture: pictureMedia(
              selection,
              "Second Testimonial Picture",
              "second",
              "50%"
            )
          },
          {
            name: selection.name3,
            quote: selection.quote3,
            picture: pictureMedia(
              selection,
              "Third Testimonial Picture",
              "third",
              "50%"
            )
          }
        ]
      }
    },
    component: TestimonialPreview
  }
}
