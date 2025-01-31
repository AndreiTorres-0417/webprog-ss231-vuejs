import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://<project>.supabase.co', '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdranBrc3Bmd21vcnJicWtzdmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjU5ODUsImV4cCI6MjA1MzYwMTk4NX0.TlnQll4NQuprl4VmTzIFBTrQs8xPgAUFA9Pgw9Qyouk>')