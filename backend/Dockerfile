FROM node:12.19.1-slim

ARG TZ
ARG PORT

# Dockerコンテナの設定
RUN mkdir -p /expo_push_notification
WORKDIR /expo_push_notification
EXPOSE ${PORT}

# npm install をキャッシュするために、最初に package*.json のみADDして npm install している
ADD ./package.json /expo_push_notification
ADD ./package-lock.json /expo_push_notification
RUN apt-get update -y && apt-get install -y git
RUN npm install
ADD ./ /expo_push_notification

ENV NODE_CONFIG_DIR=/expo_push_notification/config \
    TZ=${TZ}

RUN npm run build

CMD ["node", "./build/app.js"]