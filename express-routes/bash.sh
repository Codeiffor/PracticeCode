curl localhost:3000/profile
echo '\n'
sleep 1

curl -X POST -d '{"user":"user2","email":"emai@l.com","url":"ur.l"}' -H "Content-Type:application/json" localhost:3000/profile
echo '\n'
curl localhost:3000/profile
echo '\n'
sleep 1

curl -X PUT -d '{"user":"user3","email":"ema@il.com","url":"url.com"}' -H "Content-Type:application/json" localhost:3000/profile
echo '\n'
curl localhost:3000/profile
echo '\n'
sleep 1

curl -X DELETE localhost:3000/profile
echo '\n'
curl localhost:3000/profile
echo '\n'