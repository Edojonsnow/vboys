// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const IMAGES_QUERY =
  defineQuery(`*[_type == "vbImage" && defined(slug.current)][0...12]{
  _id, title, slug,
}`);

export const IMAGE_QUERY =
  defineQuery(`*[_type == "vbImage" && slug.current == $slug][0]{
  _id, title, slug, mainImage 
}`);
