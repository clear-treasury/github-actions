FROM alpine:3

RUN apk update && apk upgrade && apk add npm && npm i cdk@1

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
