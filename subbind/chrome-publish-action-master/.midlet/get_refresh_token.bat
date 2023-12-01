:: Use this value to request an access token. For example, using curl, you can get an access token by executing the following command 
:: (replacing the values of $CLIENT_ID, $CLIENT_SECRET, and $CODE with the values from above):


curl "https://accounts.google.com/o/oauth2/token" -d \
"client_id=238292654145-vsnph61mk9v0rcap8mih45pt8bb5dqdq.apps.googleusercontent.com&client_secret=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&code=$CODE&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob"



:: You can retrieve an access token to work with the API. For example, enter this URL in your browser, replacing the $CLIENT_ID with the one for your app:
:: https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&client_id=238292654145-vsnph61mk9v0rcap8mih45pt8bb5dqdq.apps.googleusercontent.com&redirect_uri=urn:ietf:wg:oauth:2.0:oob
:: https://developer.chrome.com/docs/webstore/using_webstore_api/