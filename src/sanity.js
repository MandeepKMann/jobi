import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'tiou2dq0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-03-25'
});

const getTalent = async () => {
  const talentList = await client.fetch('*[_type == "talent"]');
  return talentList;
}

const builder = imageUrlBuilder(client);

const urlFor = (asset) => {
  return builder.image(asset);
};

export { client, getTalent, urlFor };