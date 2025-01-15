import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const upcomingEventType = defineType({
  name: "upcomingImage",
  title: "upcomingImage",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      type: "image",
    }),
    defineField({
      name: "eventUrl",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
