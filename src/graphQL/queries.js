import { gql } from "@apollo/client";

export const GET_ALL_LINKS = gql`
  query {
    allLinks {
      url
      slug
    }
  }
`;

export const CREATE_LINK = gql`
  mutation CreateLink($slug: String, $url: String!) {
    createLink(slug: $slug, url: $url) {
      slug
      url
    }
  }
`;
