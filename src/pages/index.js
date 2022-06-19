import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <ContactsContainer>
      {data.contacts.edges.map(edge => (
        <Contact key={edge.node.id}>
          <Image
            image={edge.node.photo.gatsbyImageData}
            alt="alt"
            placeholder="blurred"
          />
          <ContactInfo>
            {edge.node.lastName}, {edge.node.firstName}, Phone:{" "}
            {edge.node.phone}
          </ContactInfo>
        </Contact>
      ))}
    </ContactsContainer>
  )
}

export const query = graphql`
  query {
    contacts: allContentfulContacts {
      edges {
        node {
          lastName
          firstName
          id
          phone
          photo {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

const ContactsContainer = styled.div`
  margin: 0 auto;
  width: 400px;
`

const Contact = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  color: #fcfcfc;
  margin-bottom: 2rem;
  background-color: #bd9015;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
`

const ContactInfo = styled.div``

const Image = styled(GatsbyImage)``
