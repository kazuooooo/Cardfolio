// import { graphql, useStaticQuery } from 'gatsby'
// const profileImage = graphql`
//   fragment ProfileImage on file(relativePath: { eq: "profile.png" }) {
//     childImageSharp {
//       fixed(width: 200 height: 200) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
//   fragment ProfilePicture on File {
//     childImageSharp {
//       fixed(width: 200 height: 200) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `
// export const useFixedImage = (path: string, width: number, height: number): any => {
//   const data = useStaticQuery(graphql`
//     query {
//       ...ProfilePicture
//     }
//   `)
//   return data.file.childImageSharp.fixed
// }
