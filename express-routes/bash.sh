echo 'GET:\t'
curl localhost:3000/profile
echo '\n'
sleep 1

echo 'POST:\t'
curl -X POST -d '{"user":"user2","email":"emai@l.com","url":"ur.l"}' -H "Content-Type:application/json" localhost:3000/profile
echo '\n'
echo 'GET:\t'
curl localhost:3000/profile
echo '\n'
sleep 1

echo 'PUT\t'
curl -X PUT -d '{"user":"user3","email":"ema@il.com","url":"url.com"}' -H "Content-Type:application/json" localhost:3000/profile/0
echo '\n'
echo 'GET:\t'
curl localhost:3000/profile
echo '\nGET modified:\t'
curl localhost:3000/profile?id=0
echo '\n'
sleep 1

echo 'DELETE:\t'
curl -X DELETE localhost:3000/profile/0
echo '\n'
echo 'GET:\t'
curl localhost:3000/profile
echo '\n'