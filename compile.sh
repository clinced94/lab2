#!/bin/bash

echo "NOW INSTALLING NODE AND DEPENDENCIES"

curl -sL https://deb.nodesource.com/setup_7.x | bash -
apt-get install -y nodejs
