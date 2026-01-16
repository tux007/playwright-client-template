import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config();


export default defineConfig({
testDir: './tests',
timeout: 30 * 1000,
retries: 1,
reporter: [['html', { open: 'never' }]],
use: {
baseURL: process.env.BASE_URL,
trace: 'on-first-retry',
screenshot: 'only-on-failure'
}
});