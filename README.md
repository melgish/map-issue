# Map Foo

Demonstrates issue with @arcgis/core v 4.23.2 when self-serving assets
and built using react.

# Issue

Map will display correctly when run in development mode (npm run start).
Map does not display when run in production mode (npm run build).  Map is
created but tiles are not requested.

Issue is not present in 4.22.2
# Buiid

```bash
# create the production build
npm ci
npm run build

# follow directions to serve
npm i --global serve
serve -s build
```

# Development
```bash
npm ci
npm start
# open browser to http://localhost:3000
```