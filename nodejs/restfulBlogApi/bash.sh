curl -H "Content-Type: application/json" -X POST -d '{"name":"abc", "url":"abc.com", "text":"hello"}' localhost:3000/posts

curl -H "Content-Type: application/json" -X POST -d '{"name" :"abc2", "url":"abc2.com", "text": "hello2"}' localhost:3000/posts

curl -H "Content-Type: application/json" -X POST -d '{"name" :"abc2", "url":"abc2.com", "text": "hello2"}' localhost:3000/posts

curl -H "Content-Type: application/json" -X POST -d '{"name" :"abc4", "url":"abc4.com", "text": "hello4"}' localhost:3000/posts

curl localhost:3000/posts

curl -H "Content-Type: application/json" -X PUT -d '{"name" :"abc3", "url":"abc3.com", "text": "hello3"}' localhost:3000/posts/2

curl localhost:3000/posts

curl -X DELETE localhost:3000/posts/3

curl localhost:3000/posts

curl -H "Content-Type: application/json" -X POST -d '{"text":"this is a comment"}' localhost:3000/posts/0/comments

curl -H "Content-Type: application/json" -X POST -d '{"text":"this is a comment"}' localhost:3000/posts/1/comments

curl -H "Content-Type: application/json" -X POST -d '{"text":"this is a comment"}' localhost:3000/posts/2/comments

curl -H "Content-Type: application/json" -X POST -d '{"text":"this is also a comment"}' localhost:3000/posts/0/comments

curl -H "Content-Type: application/json" -X POST -d '{"text":"this is a post 3 comment"}' localhost:3000/posts/0/comments

curl localhost:3000/posts

curl localhost:3000/posts/0/comments

curl localhost:3000/posts/0/comments/0

curl -H "Content-Type: application/json" -X PUT -d '{"text":"this is a post 1 comment"}' localhost:3000/posts/0/comments/2

curl localhost:3000/posts

curl -X DELETE localhost:3000/posts/0/comments/2

curl localhost:3000/posts

curl -X DELETE localhost:3000/posts/2

curl localhost:3000/posts

curl -H "Content-Type: application/json" -X PUT -d '{"name" :"abc", "url":"xyz.com", "text": "hello there"}' localhost:3000/posts/0

curl localhost:3000/posts