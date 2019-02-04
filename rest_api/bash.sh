curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
echo '\n'
curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/0" 
echo '\n'
curl "http://localhost:3000/accounts" 
echo '\n'
curl -X DELETE "http://localhost:3000/accounts/0" 