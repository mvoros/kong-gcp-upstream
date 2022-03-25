# Kong GCP Service Account Upstream Plugin

A prototype of a [Kong](https://konghq.com/kong/) Plugin for GCP Service Account Upstream Authentication. The idea is to authenticate call to backend using GCP service account. The plugin uses Google auth library and it requires generate key of service account.

## Configuration

| Attribute   | Default Value | Description                                                            |
| ----------- | ------------- | ---------------------------------------------------------------------- |
| private_key | N/A           | Path to a private key                                                  |
| scope       | N/A           | Scope that will be used to generate token. Usually URL of API endpoint |
