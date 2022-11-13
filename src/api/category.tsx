

   const spaceId= "f5klpei59l37"
    const accessToken= "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ"
    const query =`query {
        categoryCollection {
          items {
            categoryName
            categoryImage{
              title
              url
            }
          }
        }
      }
        `



export const getAllCategories = async ()=>{
    
    const response = await  fetch (`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({query}),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        } 
         return  data.categoryCollection.items 
      });
      return response
     
}
