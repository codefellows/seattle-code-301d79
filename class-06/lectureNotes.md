# Lecture Notes

## warm-up comments
- maybe put the data in a file
- move onclick function to the component method
- moving images from state
- HEADER! - would have the h1 and p
- a componet for each horned animal

## WRRC and How the internet works
- WRRC
  - web request response cycle
  - the way we send and recieve state/data over the web

- Communication Protocol
  - a system of rules that allows two or more entities of a communications system to transmit information. Protocol defines rules, syntax, symantics, synchronization, and error methods.

  - HTTP is a network protocol created in 1989 to improve upon some of the previous ways of sending data over the internet. Built on top of TCP which was built on top of IP. Prior we used ip packets that could only store send a small amount of data at a time. 
  - HTTP REQUEST SCHEMA
  {
    host: string
    port: integer
    method: string
    headers: pair list (like Content-Type: text/html; charset=UTF-8)
    body: opaque sequence of bytes (data can be described by the content type in the header)
  }
  - HTTP RESPONSE SCHEMA
  {
    status code: (200, 400, 500)
    headers: pair list
    body: opaque sequence of bytes
  }

- REST
  - a resource-oriented architecture: interface uniformity, Client/server architecture, without any state or session preservation, resource representation caching, use of the HTTP protocol and its methods.
  - The architectural style, REST (REpresentational State Transfer) is by far the most standardized way of structuring the web APIs for requests. REST is purely an architectural style based on several principles. The APIs adhering to REST principles are called RESTful APIs. REST APIs use a request/response model where every message from the server is the response to a message from the client. In general, RESTful APIs uses HTTP as its transport protocol. For such cases, lookups should use GET requests. PUT, POST, and DELETE requests should be used for mutation, creation, and deletion respectively (avoid using GET requests for updating information).

- API? Application programming interface: acts as a middle layer between two applications to allow them to communicate. 
  - needs to be clear about HOW to ask (good docs)

- ENV
  - .env (gitignore) DON'T PUT ON GITHUB
  - a special file that holds 'environmental variables' for your application
  - remember when deploying to go to your host and ADD your environment variables

- What is the cloud?
  - The cloud refers to software and services that run on the Internet, instead of locally on your computer

- Error handling
  - when making using a promise or async you can use try/catch to handle the case where your promise does not resolve successfully
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
