import type { INodeProperties } from 'n8n-workflow';

export const authorizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					]
				}
			},
			"options": [
				{
					"name": "Generate Token V 2",
					"value": "Generate Token V 2",
					"action": "Generate an OAuth Token",
					"description": "Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/oauth2/token"
						}
					}
				},
				{
					"name": "Revoke Refresh Token V 2",
					"value": "Revoke Refresh Token V 2",
					"action": "Delete a Refresh Token",
					"description": "Delete a Refresh Token",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v2/oauth2/tokens/{{$parameter[\"token\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v2/oauth2/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					],
					"operation": [
						"Generate Token V 2"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/oauth2/token<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					],
					"operation": [
						"Generate Token V 2"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v2/oauth2/tokens/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					],
					"operation": [
						"Revoke Refresh Token V 2"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "the token to revoke",
			"default": "SOME_REFRESH_TOKEN",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					],
					"operation": [
						"Revoke Refresh Token V 2"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer_token",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearer_token",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization"
					],
					"operation": [
						"Revoke Refresh Token V 2"
					]
				}
			}
		},
];
