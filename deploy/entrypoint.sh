#!/bin/sh
# env $@ cdk bootstrap
env $@ env
pwd
ls -latr
ls -latr $GITHUB_WORKSPACE
echo cdk bootstrap
