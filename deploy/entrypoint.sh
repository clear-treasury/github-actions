#!/bin/sh
env $@ cdk bootstrap
env $@ cdk deploy
