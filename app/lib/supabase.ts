import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ccntnagudznyiefmbbip.supabase.co'
const supabaseKey = 'sb_publishable_73lBU_B7KvitoOJiZMzh-g_sRrmU_eg'

export const supabase = createClient(supabaseUrl, supabaseKey)
