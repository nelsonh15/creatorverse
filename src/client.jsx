/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';

const URL = 'https://myowufdttxkniaaaypxc.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15b3d1ZmR0dHhrbmlhYWF5cHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0Mzc0OTEsImV4cCI6MjAzOTAxMzQ5MX0.WZz_TJzr6HBIqYJLp-KarN3sl-FdwVOCz7geaZYn4Fk'
export const supabase = createClient(URL, API_KEY);