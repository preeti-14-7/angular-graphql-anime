import { gql } from 'apollo-angular';

const Query_anime = gql `
{
  characters(filter: {village: "leaf"}) {
    results {
      _id
      name
      avatarSrc
      description
      rank
      village
    }
  }
}
`;

export {Query_anime} ;