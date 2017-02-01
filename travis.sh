#!/bin/bash

if [[ "$TRAVIS_BRANCH" = "master" ]];
then
  npm run test
fi
if [[ "$TRAVIS_BRANCH" =~ ^v[0-9].[0-9].[0-9]$ ]];
then
  npm run test && npm run release
fi
