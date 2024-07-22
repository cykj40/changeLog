import * as dotenv from 'dotenv'

dotenv.config()

import app from './server'
import { dot } from 'node:test/reporters';

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
