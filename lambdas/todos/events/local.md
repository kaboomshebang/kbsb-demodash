# URLs

## endpoint: /

```http
GET http://100.111.214.8:8000/ HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT",
    "msg": "test"
}
```

## endpoint: /hello

```http
POST http://100.111.214.8:8000/hello HTTP/1.1
content-type: application/json

{"event": "test"}
```
