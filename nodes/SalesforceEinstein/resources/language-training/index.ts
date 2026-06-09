import type { INodeProperties } from 'n8n-workflow';

export const languageTrainingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					]
				}
			},
			"options": [
				{
					"name": "Retrain",
					"value": "Retrain",
					"action": "Retrain a Dataset",
					"description": "Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/retrain"
						}
					}
				},
				{
					"name": "Train",
					"value": "Train",
					"action": "Train a Dataset",
					"description": "Trains a dataset and creates a model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/train"
						}
					}
				},
				{
					"name": "Get Train Status And Progress",
					"value": "Get Train Status And Progress",
					"action": "Get Training Status",
					"description": "Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/train/{{$parameter[\"modelId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v2/language/retrain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Retrain"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/retrain<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Retrain"
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
						"Language Training"
					],
					"operation": [
						"Retrain"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/train",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Train"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/train<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Train"
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
						"Language Training"
					],
					"operation": [
						"Train"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/train/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Get Train Status And Progress"
					]
				}
			}
		},
		{
			"displayName": "Model Id",
			"name": "modelId",
			"required": true,
			"description": "Model Id",
			"default": "SomeModelId",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Training"
					],
					"operation": [
						"Get Train Status And Progress"
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
						"Language Training"
					],
					"operation": [
						"Get Train Status And Progress"
					]
				}
			}
		},
];
