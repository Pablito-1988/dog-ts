
const spaceId = "f5klpei59l37";
const accessToken = "qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ";
const query = `query{
  sliderCollection{
    items{
      sliderImg{
        url
      }
    }
  }
}`


export const getSliderImg =  ()=>{
    
    const response =   fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        return data.sliderCollection.items;
      });
      return response
     
}


