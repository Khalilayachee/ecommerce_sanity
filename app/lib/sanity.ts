import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'ne79hqpe';
const dataset = 'production';
const apiVersion = '2025-06-10';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}