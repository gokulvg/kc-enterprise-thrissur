import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mrnoghoibmzdqtlhtwkk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybm9naG9pYm16ZHF0bGh0d2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NTE3MzYsImV4cCI6MjA0OTIyNzczNn0.14cZAwuzqmvcCW3E3jkz5R51oy9ea1Euyu4mlsMXTKs'
export const supabase = createClient(supabaseUrl, supabaseKey)