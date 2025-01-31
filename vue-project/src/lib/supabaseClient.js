import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://<project>.supabase.co', '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpeHJqemhodmJ1eXhjandodWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjY4ODgsImV4cCI6MjA1MzYwMjg4OH0.ScfVoAFUh-LSkB4g64zJaqPXFeZcOE5lZ0pwUNmPQQo>')