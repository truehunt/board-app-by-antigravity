# 1단계: 빌드 환경 (Node.js)
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 정보 복사 및 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스코드 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 실행 환경 (Nginx)
FROM nginx:alpine

# Nginx 커스텀 설정 파일 복사
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 React 정적 파일들을 Nginx의 서빙 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
