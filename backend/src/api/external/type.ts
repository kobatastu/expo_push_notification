type BodyType = {
  pushToken: string;
};

export const isRequestBody = (obj: unknown): obj is BodyType => {
  try {
    const t = obj as BodyType;
    const { pushToken } = t;
    if (typeof pushToken === 'string') {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
