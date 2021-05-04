FROM alpine:3

RUN apk update && apk upgrade && apk add npm

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
