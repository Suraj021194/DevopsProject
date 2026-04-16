FROM node:18
WORKDIR /app
COPY basic_app.js .
EXPOSE 3000
CMD ["node", "basic_app.js"]
