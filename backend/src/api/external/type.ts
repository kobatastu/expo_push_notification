type BodyType = {
  token: string;
};

export const isRequestBody = (obj: unknown): obj is BodyType => {
  try {
    const t = obj as BodyType;
    const { token } = t;
    if (typeof token === 'string') {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
