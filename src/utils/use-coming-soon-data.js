import { useStaticQuery, graphql } from "gatsby";

export const useComingSoonData = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allJson {
        edges {
          node {
            title
            signup {
              placeholder
            }
          }
        }
      }
    }
  `);

  return data.allJson;
};
