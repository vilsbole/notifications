FROM ubuntu:22.04 as base
RUN apt-get update -y && apt-get install -y python3-pip python3-dev
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt
COPY . /app

FROM base as start
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]

FROM base as test
CMD [ "pytest" ]
