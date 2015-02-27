#!/bin/bash
mv _apidoc.js Routes/
apidoc -i Routes/
mv Routes/_apidoc.js .
