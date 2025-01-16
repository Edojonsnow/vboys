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

export const EVENT_QUERY = defineQuery(`*[_type == "eventInfo" ][0]{
  _id, title, description, eventUrl , buttonText 
}`);

export const UPCOMINGEVENT_QUERY = defineQuery(`*[_type == "upcomingImage" ][0]{
  _id, title, mainImage, eventUrl  
}`);
