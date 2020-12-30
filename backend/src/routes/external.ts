import promiseRouter from 'express-promise-router';

import { token } from '../api/external/token';

const router = promiseRouter();

router.post('/api/external/token', token);

export const externalRouter = router;
