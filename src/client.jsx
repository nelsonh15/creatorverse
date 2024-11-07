/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';

const URL = 'hidden';

const API_KEY = 'hidden'
export const supabase = createClient(URL, API_KEY);