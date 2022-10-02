FROM ubuntu:22.04 as base
RUN apt-get update -y && apt-get install -y python3-pip python3-dev
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt
COPY . /app
WORKDIR /app

FROM base as start
ENTRYPOINT [ "python3" ]
CMD [ "/app.py" ]

FROM base as test
ENTRYPOINT ["pytest"]
CMD [ "-vv" ]
