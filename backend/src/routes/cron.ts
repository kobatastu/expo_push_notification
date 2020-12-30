import promiseRouter from 'express-promise-router';

import { pushToken } from '../api/cron/pushToken';

const router = promiseRouter();

router.get('/api/cron/pushToken', pushToken);

export const cronRouter = router;
