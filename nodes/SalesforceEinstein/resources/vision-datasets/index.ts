import type { INodeProperties } from 'n8n-workflow';

export const visionDatasetsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					]
				}
			},
			"options": [
				{
					"name": "List Datasets 1",
					"value": "List Datasets 1",
					"action": "Get All Datasets",
					"description": "Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/datasets"
						}
					}
				},
				{
					"name": "Create Dataset",
					"value": "Create Dataset",
					"action": "Create a Dataset",
					"description": "Creates a dataset and labels, if they're specified.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/datasets"
						}
					}
				},
				{
					"name": "Upload Dataset Async 1",
					"value": "Upload Dataset Async 1",
					"action": "Create a Dataset From a Zip File Asynchronously",
					"description": "Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/datasets/upload"
						}
					}
				},
				{
					"name": "Upload Dataset Sync 1",
					"value": "Upload Dataset Sync 1",
					"action": "Create a Dataset From a Zip File Synchronously",
					"description": "Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/datasets/upload/sync"
						}
					}
				},
				{
					"name": "Delete Dataset 1",
					"value": "Delete Dataset 1",
					"action": "Delete a Dataset",
					"description": "Deletes the specified dataset and associated labels and examples.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}"
						}
					}
				},
				{
					"name": "Get Dataset 1",
					"value": "Get Dataset 1",
					"action": "Get a Dataset",
					"description": "Returns a single dataset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}"
						}
					}
				},
				{
					"name": "Get 1",
					"value": "Get 1",
					"action": "Get Deletion Status",
					"description": "Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/deletion/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/vision/datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"List Datasets 1"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Index of the dataset from which you want to start paging",
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
						"Vision Datasets"
					],
					"operation": [
						"List Datasets 1"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.",
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
						"Vision Datasets"
					],
					"operation": [
						"List Datasets 1"
					]
				}
			}
		},
		{
			"displayName": "Global",
			"name": "global",
			"description": "If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "global",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"List Datasets 1"
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
						"Vision Datasets"
					],
					"operation": [
						"List Datasets 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Create Dataset"
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
						"Vision Datasets"
					],
					"operation": [
						"Create Dataset"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Async 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Async 1"
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
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Async 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/upload/sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Sync 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/upload/sync<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Sync 1"
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
						"Vision Datasets"
					],
					"operation": [
						"Upload Dataset Sync 1"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v2/vision/datasets/{datasetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Delete Dataset 1"
					]
				}
			}
		},
		{
			"displayName": "Dataset ID",
			"name": "datasetId",
			"required": true,
			"description": "Dataset Id",
			"default": "SomeDatasetId",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Delete Dataset 1"
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
						"Vision Datasets"
					],
					"operation": [
						"Delete Dataset 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/datasets/{datasetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Get Dataset 1"
					]
				}
			}
		},
		{
			"displayName": "Dataset ID",
			"name": "datasetId",
			"required": true,
			"description": "Dataset Id",
			"default": "SomeDatasetId",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Get Dataset 1"
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
						"Vision Datasets"
					],
					"operation": [
						"Get Dataset 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/deletion/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Get 1"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Deletion Id",
			"default": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Datasets"
					],
					"operation": [
						"Get 1"
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
						"Vision Datasets"
					],
					"operation": [
						"Get 1"
					]
				}
			}
		},
];
