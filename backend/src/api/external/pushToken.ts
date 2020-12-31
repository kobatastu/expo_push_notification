import { Request, Response } from 'express';

import { isRequestBody } from './type';
import { setPushToken } from '../../infra/firestore';

export const pushToken = async (req: Request, res: Response) => {
  if (!isRequestBody(req.body)) {
    res.status(400).json({ error: 'body is not correct type' });
    return;
  }
  const { pushToken } = req.body;

  try {
    await setPushToken(pushToken);
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({ data: `runtime error : ${e}` });
  }
};
