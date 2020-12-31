import promiseRouter from 'express-promise-router';

import { pushToken } from '../api/external/pushToken';

const router = promiseRouter();

router.post('/api/external/pushToken', pushToken);

export const externalRouter = router;
