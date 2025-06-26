import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        //price: z.string(),
        icon: z.string(),
        link: z.string(),
    }),
});
export const collections = {
  services: servicesCollection,
};