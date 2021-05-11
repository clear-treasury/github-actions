# deploy action

This will be the AWS deployment machinery.

## Inputs

### `access-key-id`

**Required** The aws access key id

### `secret-access-key`

**Required** The aws secret access key

### `session-token`

The aws session token

### `region`

The aws region

## Outputs

### `success`

Result of the deployment

### `code`

A final status code for the deployment

### `message`

A human readable description of the final status of the deployment

## Example usage

uses: clear-treasury/github-actions/deploy@latest
with:
  access-key-id: A???
  secret-access-key: ????????
