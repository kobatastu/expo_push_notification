import { Request, Response } from 'express';

import { getAllPushTokens } from '../../infra/firestore';
import { sendPushNotification } from '../../service/sendPushNotification';

export const pushToken = async (req: Request, res: Response) => {
  try {
    const pushTokens = await getAllPushTokens();
    pushTokens.forEach(async (pushToken) => await sendPushNotification(pushToken));
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({ data: `runtime error : ${e}` });
  }
};
