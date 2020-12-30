import { initializeApp, firestore } from 'firebase-admin';

const app = initializeApp();

export const setPushToken = async (pushToken: string) => {
  await app
    .firestore()
    .collection('pushTokens')
    .doc()
    .set({
      created_at: firestore.Timestamp.fromDate(new Date()),
      pushToken,
    });
};

export const getAllPushTokens = async () => {
  const querySnapshot = await app.firestore().collection('pushTokens').get();

  if (querySnapshot.empty) return null;

  return querySnapshot.docs.map((doc) => doc.data().pushToken);
};
