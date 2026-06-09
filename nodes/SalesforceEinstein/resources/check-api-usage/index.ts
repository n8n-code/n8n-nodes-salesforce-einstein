import type { INodeProperties } from 'n8n-workflow';

export const checkApiUsageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Check API Usage"
					]
				}
			},
			"options": [
				{
					"name": "Get Api Usage Plans V 2",
					"value": "Get Api Usage Plans V 2",
					"action": "Get API Isage",
					"description": "Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/apiusage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/apiusage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Check API Usage"
					],
					"operation": [
						"Get Api Usage Plans V 2"
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
						"Check API Usage"
					],
					"operation": [
						"Get Api Usage Plans V 2"
					]
				}
			}
		},
];
