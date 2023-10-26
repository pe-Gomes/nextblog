import axios from 'axios'
import { apiConfig } from '@/config/api'
export const api = axios.create(apiConfig)
