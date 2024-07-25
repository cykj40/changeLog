import merge from 'lodash/merge';
import { env } from 'process';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';

let envconfig

if (stage === 'production') {
  envconfig = require('./production').default;
} else if (stage === 'testing') {
  envconfig = require('./testing').default;
} else {
    envconfig = require('./local').default;
    }

    export default merge({
        stage,
        env: process.env.NODE_ENV,
        port: 3001,
        secrets: {
            jwt: process.env.JWT_SECRET,
            dbUrl: process.env.DATABASE_URL,
        },
    }, envconfig);
    