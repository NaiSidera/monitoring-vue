#!/bin/bash

git pull
npm install && npm build
rm -R /var/www/html/*
cp -r ./dist/* /var/www/html