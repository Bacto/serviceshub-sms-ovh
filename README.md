# servicesHub - Handle SMS through OVH

This is a micro service to send a SMS through OVH's API

## Create an API account on OVH

You have to create an API account on OVH.

Go to https://eu.api.ovh.com/createToken/

Fill the form with those options:
  - Validity: unlimited
  - Rights:
      - GET /sms/
      - GET/sms/*/jobs/
      - POST /sms/*/jobs/

Get the "Application Key", "Application Secret" and "Consumer Key".


## Send a SMS

```
curl -i -X POST \
  -d "appKey=..." \
  -d "appSecret=..." \
  -d "consumerKey=..." \
  -d "number=..." \
  -d "message=..." \
  "http://serviceshub1.bacto.net:9092/send"
```

Notes:

- replace number by an international number format, ie. 0033xxxxxxxxx for a french number.

- french law disallow to send commercials SMS by night or during the week-end. If you are in France, you will receive SMS only during week's day.
