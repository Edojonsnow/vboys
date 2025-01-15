import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventInfoType = defineType({
  name: "eventInfo",
  title: "Event Information",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "eventUrl",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      type: "string",
    }),
  ],
});
