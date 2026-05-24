import { defineCollection, z } from 'astro:content';

const especialidades = defineCollection({
  type: 'data',
  schema: z.object({
    page: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      slogan: z.string().optional(),
      image: z.string().optional(),
      og_banner: z.object({
        badge: z.string().optional(),
        title: z.string(),
        subtitle: z.string()
      }).optional(),
    }),
    content: z.array(
      z.object({
        _type: z.string(),
        data: z.any(),
      })
    ),
  }),
});

export const collections = {
  especialidades,
};
