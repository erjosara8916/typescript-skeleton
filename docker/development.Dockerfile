FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PORT=8080
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

FROM base AS dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base
COPY --from=dev-deps /app/node_modules /app/node_modules

COPY . /app/

EXPOSE $PORT
EXPOSE 9229

CMD [ "pnpm", "run", "start:dev", "--inspect=0.0.0.0:9229"]