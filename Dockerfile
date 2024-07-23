# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
COPY . /usr/src/app
RUN bun install --frozen-lockfile


# run the app
USER bun
EXPOSE 3000/tcp

# Terminal -> bun astro dev
CMD ["bun", "dev"]
