# Lecture Notes

## Authorization
- rights to access
- permission for something
- could only allow for certain permissions not all

## Authentication
- Verifying
- being sure someone is who they say they are
- in computer terms
  - user name and password
    - two-factor
      - additional layer of security


## HIPPA
  - Very sensitive info
  - Companies pay big money to protect your data

## to take the load off
  - protecting sensitive data off the shoulders of smaller companies/smaller applications
    - leverage the security that other larger companies $$$$$ put into protecting data
    - OAUTH
      - lots of code to write
    - Auth0 (auth zero)
      - gives us lots of prewritten code

## How does OAUTH work?
- client uses some tool to bridge te loogin gap between you and google/pinterest/amazon/paypal
- a handshake occurs between google and the client and a token is created
- the client uses the token when requesting from the backend
- the backend verifies the token