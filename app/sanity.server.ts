import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-03-10',
  useCdn: false,
}) 