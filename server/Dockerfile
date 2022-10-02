FROM ubuntu:22.04 as base
RUN apt-get update -y && apt-get install -y python3-pip python3-dev
COPY ./requirements.txt /server/requirements.txt
RUN pip install -r /server/requirements.txt
COPY . /server

FROM base as start
ENTRYPOINT [ "python3" ]
CMD [ "/server/app.py" ]

FROM base as test
CMD [ "pytest", "-vv" ]
