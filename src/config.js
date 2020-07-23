export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "ss-notes",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://04l2cm0pfh.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_gJ8bSXgY2",
    APP_CLIENT_ID: "e9puulge73rqhec576egr94of",
    IDENTITY_POOL_ID: "us-east-2:8ef5bafb-faad-4fd1-ad5e-be41b13fb51a",
  },
  STRIPE_KEY:
    "pk_test_51H7auQL3OBkQEBucVoxem7H1rG8JB0UapxdNI7lTBiRO1IL3LoFRWhKZHWNGbGssiQCGPWU8YnSzSSH0WONs5XqA00ZQj8dGeM",
}
