import type { INodeProperties } from 'n8n-workflow';

export const languageDatasetsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					]
				}
			},
			"options": [
				{
					"name": "List Datasets",
					"value": "List Datasets",
					"action": "Get All Datasets",
					"description": "Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/datasets"
						}
					}
				},
				{
					"name": "Upload Dataset Async",
					"value": "Upload Dataset Async",
					"action": "Create a Dataset From a File Asynchronously",
					"description": "Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/datasets/upload"
						}
					}
				},
				{
					"name": "Upload Dataset Sync",
					"value": "Upload Dataset Sync",
					"action": "Create a Dataset From a File Synchronously",
					"description": "Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/datasets/upload/sync"
						}
					}
				},
				{
					"name": "Delete Dataset",
					"value": "Delete Dataset",
					"action": "Delete a Dataset",
					"description": "Deletes the specified dataset and associated labels and examples.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v2/language/datasets/{{$parameter[\"datasetId\"]}}"
						}
					}
				},
				{
					"name": "Get Dataset",
					"value": "Get Dataset",
					"action": "Get a Dataset",
					"description": "Returns a single dataset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/datasets/{{$parameter[\"datasetId\"]}}"
						}
					}
				},
				{
					"name": "Get",
					"value": "Get",
					"action": "Get Deletion Status",
					"description": "Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/deletion/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/language/datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"List Datasets"
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
						"Language Datasets"
					],
					"operation": [
						"List Datasets"
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
						"Language Datasets"
					],
					"operation": [
						"List Datasets"
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
						"Language Datasets"
					],
					"operation": [
						"List Datasets"
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
						"Language Datasets"
					],
					"operation": [
						"List Datasets"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/datasets/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Async"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/datasets/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Async"
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
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Async"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/datasets/upload/sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Sync"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/datasets/upload/sync<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Sync"
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
						"Language Datasets"
					],
					"operation": [
						"Upload Dataset Sync"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v2/language/datasets/{datasetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Delete Dataset"
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
						"Language Datasets"
					],
					"operation": [
						"Delete Dataset"
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
						"Language Datasets"
					],
					"operation": [
						"Delete Dataset"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/datasets/{datasetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Get Dataset"
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
						"Language Datasets"
					],
					"operation": [
						"Get Dataset"
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
						"Language Datasets"
					],
					"operation": [
						"Get Dataset"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/deletion/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Datasets"
					],
					"operation": [
						"Get"
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
						"Language Datasets"
					],
					"operation": [
						"Get"
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
						"Language Datasets"
					],
					"operation": [
						"Get"
					]
				}
			}
		},
];
