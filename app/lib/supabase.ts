import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ccntnagudznyiefmbbip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbnRuYWd1ZHpueWllZm1iYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyNjE0NzMsImV4cCI6MjA5OTgzNzQ3M30.ibsntRsk-dnw9qr7Z-Vmdlon5lbkKLvtwTHTx-WX6O4'

export const supabase = createClient(supabaseUrl, supabaseKey)
