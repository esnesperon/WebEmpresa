import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.coerce.date(),
        link: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default('Orviq Studio'),
        image: z.string().optional(),
        category: z.string(),
        readTime: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
