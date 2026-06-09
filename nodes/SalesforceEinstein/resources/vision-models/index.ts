import type { INodeProperties } from 'n8n-workflow';

export const visionModelsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Models"
					]
				}
			},
			"options": [
				{
					"name": "Get Trained Models 1",
					"value": "Get Trained Models 1",
					"action": "Get All Models",
					"description": "Returns all models for the specified dataset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}/models"
						}
					}
				},
				{
					"name": "Delete Model 1",
					"value": "Delete Model 1",
					"action": "Delete a Model",
					"description": "Deletes the specified model.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v2/vision/models/{{$parameter[\"modelId\"]}}"
						}
					}
				},
				{
					"name": "Get Trained Model Metrics 1",
					"value": "Get Trained Model Metrics 1",
					"action": "Get Model Metrics",
					"description": "Returns the metrics for a model",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/models/{{$parameter[\"modelId\"]}}"
						}
					}
				},
				{
					"name": "Get Trained Model Learning Curve 1",
					"value": "Get Trained Model Learning Curve 1",
					"action": "Get Model Learning Curve",
					"description": "Returns the metrics for each epoch in a model.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/models/{{$parameter[\"modelId\"]}}/lc"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/vision/datasets/{datasetId}/models",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Models"
					],
					"operation": [
						"Get Trained Models 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Models 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Models 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Models 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Models 1"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v2/vision/models/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Models"
					],
					"operation": [
						"Delete Model 1"
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
						"Vision Models"
					],
					"operation": [
						"Delete Model 1"
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
						"Vision Models"
					],
					"operation": [
						"Delete Model 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/models/{modelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Metrics 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Metrics 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Metrics 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/models/{modelId}/lc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Learning Curve 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Learning Curve 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Learning Curve 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Learning Curve 1"
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
						"Vision Models"
					],
					"operation": [
						"Get Trained Model Learning Curve 1"
					]
				}
			}
		},
];
