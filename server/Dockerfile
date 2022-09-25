FROM ubuntu:22.04
RUN apt-get update -y && apt-get install -y python-pip python2-dev
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip2 install -r requirements.txt
COPY . /app
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
