#!/bin/bash
echo "Starting my app."
cd  /home/ubuntu/BDFeslic
source feslic/bin/activate
sudo /home/ubuntu/BDFeslic/feslic/bin/gunicorn --workers=20 -b 0.0.0.0:443 --certfile=micertificado.pem --keyfile=llaveprivada.pem wsgi:application