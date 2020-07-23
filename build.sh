docker run -u "$(id -u):$(id -g)" -w="/app" -v ${PWD}:/app node:12.18-alpine sh -c "npm i && npm run build && npm run export"
