#!/bin/bash
docker build -t ffrm/dockernode .
docker run -p 3000:3000 -d ffrm/dockernode