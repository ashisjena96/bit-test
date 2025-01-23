FROM node:14

USER root

RUN npm i @teambit/bvm -g
RUN bvm upgrade
ENV PATH=$PATH:/root/bin

# increase memory to avoid 137 error code
ENV NODE_OPTIONS=--max_old_space_size=4096

RUN bit config set analytics_reporting false
RUN bit config set no_warnings false
RUN bit config set interactive false
RUN bit config set error_reporting true

ARG SCOPE_PATH=/root/my-scope
WORKDIR ${SCOPE_PATH}
RUN bit init --bare
CMD bit start