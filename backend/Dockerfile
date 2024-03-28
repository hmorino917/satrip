FROM ruby:3.1.4

WORKDIR /backend

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git libvips pkg-config

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3001
CMD ["./bin/rails", "server"]
