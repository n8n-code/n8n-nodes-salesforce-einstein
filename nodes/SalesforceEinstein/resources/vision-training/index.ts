import type { INodeProperties } from 'n8n-workflow';

export const visionTrainingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					]
				}
			},
			"options": [
				{
					"name": "Retrain 1",
					"value": "Retrain 1",
					"action": "Retrain a Dataset",
					"description": "Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/retrain"
						}
					}
				},
				{
					"name": "Train 1",
					"value": "Train 1",
					"action": "Train a Dataset",
					"description": "Trains a dataset and creates a model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/train"
						}
					}
				},
				{
					"name": "Get Train Status And Progress 1",
					"value": "Get Train Status And Progress 1",
					"action": "Get Training Status",
					"description": "Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/train/{{$parameter[\"modelId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v2/vision/retrain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Retrain 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/retrain<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Retrain 1"
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
						"Vision Training"
					],
					"operation": [
						"Retrain 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/train",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Train 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/train<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Train 1"
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
						"Vision Training"
					],
					"operation": [
						"Train 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/train/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Get Train Status And Progress 1"
					]
				}
			}
		},
		{
			"displayName": "Model ID",
			"name": "modelId",
			"required": true,
			"default": "SomeModelId",
			"type": "string",
			"description": "Model Id",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Training"
					],
					"operation": [
						"Get Train Status And Progress 1"
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
						"Vision Training"
					],
					"operation": [
						"Get Train Status And Progress 1"
					]
				}
			}
		},
];
