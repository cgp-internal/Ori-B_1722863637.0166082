#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Init a project
mkdir -p project
cd project
npm init -y

# Install required packages
npm install csv-parser