# =============================================================================
# Etapa 1 — "builder": compilar la app (Node + Yarn → carpeta dist/)
# =============================================================================
# Aquí solo necesitamos Node para ejecutar `yarn build`. El resultado es HTML,
# JS y CSS estáticos; no hace falta Node en producción para servirlos.
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar manifiestos primero: si no cambian, Docker reutiliza la capa de
# `yarn install` y el build es mucho más rápido.
COPY package.json yarn.lock ./

# Yarn 1.x vía Corepack: la imagen ya trae `yarn` (no uses npm -g, da EEXIST)
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable \
  && corepack prepare yarn@1.22.22 --activate \
  && yarn install --frozen-lockfile

# Código fuente (respeta .dockerignore)
COPY . .

# TypeScript + empaquetado Vite → salida en /app/dist
RUN yarn build

# =============================================================================
# Etapa 2 — imagen final: solo Nginx + archivos estáticos (imagen pequeña)
# =============================================================================
FROM nginx:alpine

# Sustituir la página por defecto de Nginx por tu build
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración mínima (SPA: fallback a index.html)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Nginx escucha en 80 *dentro* del contenedor. En tu máquina usa el puerto que
# quieras con -p, p. ej. 3000 → 80:
#   docker run --rm -p 3000:80 personal-page:latest
# Luego: http://localhost:3000
EXPOSE 80

# Nginx en primer plano (el contenedor debe seguir “vivo”)
CMD ["nginx", "-g", "daemon off;"]
