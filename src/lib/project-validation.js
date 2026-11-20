import { z } from 'zod';

const optionalLink = z.union([z.url(), z.literal('')]).optional();
export const projectSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(90),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(90),
  title: z.string().trim().min(3).max(160),
  category: z.enum(['web-dev', 'data-analysis', 'data-engineer', 'ai-automation']),
  short_description: z.string().trim().min(10).max(500),
  outcome: z.string().trim().max(220).nullable().optional(),
  description: z.string().max(10000).nullable().optional(),
  problem: z.string().max(5000).nullable().optional(),
  solution: z.string().max(5000).nullable().optional(),
  github_url: optionalLink,
  live_demo_url: optionalLink,
  technologies: z.array(z.string().trim().min(1).max(80)).max(50).default([]),
  status: z.enum(['draft', 'published']),
  featured: z.boolean().default(false),
  featured_order: z.number().int().min(0).nullable().optional(),
  sort_order: z.number().int().min(0).default(0),
});

export const projectUpdateSchema = projectSchema.omit({ id: true }).partial();
