/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const spaceId = 'f5klpei59l37'
const accessToken = 'qFP0gtMR5kSIym8b9moI0USNmXys6etjPY2_jDNGTjQ'
const query = `query{
  sliderCollection{
    items{
      sliderImg{
        url
      }
    }
  }
}`

export const getSliderImg = async () => {
  const response = fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ query })
  })
    .then(async (response) => await response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors)
      }
      return data.sliderCollection.items
    })
  return await response
}
