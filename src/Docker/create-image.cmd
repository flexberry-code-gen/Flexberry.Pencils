docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pencils/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t pencils/app ../..
