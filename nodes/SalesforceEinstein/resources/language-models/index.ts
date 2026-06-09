import type { INodeProperties } from 'n8n-workflow';

export const languageModelsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					]
				}
			},
			"options": [
				{
					"name": "Get Trained Models",
					"value": "Get Trained Models",
					"action": "Get All Models",
					"description": "Returns all models for the specified dataset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/datasets/{{$parameter[\"datasetId\"]}}/models"
						}
					}
				},
				{
					"name": "Delete Model",
					"value": "Delete Model",
					"action": "Delete a Model",
					"description": "Deletes the specified model.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v2/language/models/{{$parameter[\"modelId\"]}}"
						}
					}
				},
				{
					"name": "Get Trained Model Metrics",
					"value": "Get Trained Model Metrics",
					"action": "Get Model Metrics",
					"description": "Returns the metrics for a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/models/{{$parameter[\"modelId\"]}}"
						}
					}
				},
				{
					"name": "Get Trained Model Learning Curve",
					"value": "Get Trained Model Learning Curve",
					"action": "Get Model Learning Curve",
					"description": "Returns the metrics for each epoch in a model.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/models/{{$parameter[\"modelId\"]}}/lc"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/language/datasets/{datasetId}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Models"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Index of the model from which you want to start paging.",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Models"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of models to return.",
			"default": "100",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Models"
					]
				}
			}
		},
		{
			"displayName": "Dataset Id",
			"name": "datasetId",
			"required": true,
			"description": "Dataset Id",
			"default": "SomeDatasetId",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Models"
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
						"Language Models"
					],
					"operation": [
						"Get Trained Models"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v2/language/models/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Delete Model"
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
						"Language Models"
					],
					"operation": [
						"Delete Model"
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
						"Language Models"
					],
					"operation": [
						"Delete Model"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/models/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Model Metrics"
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
						"Language Models"
					],
					"operation": [
						"Get Trained Model Metrics"
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
						"Language Models"
					],
					"operation": [
						"Get Trained Model Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/models/{modelId}/lc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Model Learning Curve"
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
						"Language Models"
					],
					"operation": [
						"Get Trained Model Learning Curve"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Index of the epoch from which you want to start paging",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Model Learning Curve"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of epoch to return. Maximum valid value is 25.",
			"default": "25",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Models"
					],
					"operation": [
						"Get Trained Model Learning Curve"
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
						"Language Models"
					],
					"operation": [
						"Get Trained Model Learning Curve"
					]
				}
			}
		},
];
