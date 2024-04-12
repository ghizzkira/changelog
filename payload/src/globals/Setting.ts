import { GlobalConfig } from "payload/types";

export const Setting: GlobalConfig = {
  slug: "setting",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      type: "text",
    },
  ],
};
