import type { INodeProperties } from 'n8n-workflow';

export const visionExamplesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					]
				}
			},
			"options": [
				{
					"name": "Update Dataset Async 1",
					"value": "Update Dataset Async 1",
					"action": "Create Feedback Examples From a Zip File",
					"description": "Adds feedback examples to the dataset associated with the specified object detection model.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v2/vision/bulkfeedback"
						}
					}
				},
				{
					"name": "Get Examples 1",
					"value": "Get Examples 1",
					"action": "Get All Examples",
					"description": "Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}/examples"
						}
					}
				},
				{
					"name": "Add Example",
					"value": "Add Example",
					"action": "Create an Example",
					"description": "Adds an example with the specified label to a dataset.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}/examples"
						}
					}
				},
				{
					"name": "Update Dataset Async 2",
					"value": "Update Dataset Async 2",
					"action": "Create Examples From a Zip File",
					"description": "Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v2/vision/datasets/{{$parameter[\"datasetId\"]}}/upload"
						}
					}
				},
				{
					"name": "Get Examples By Label 1",
					"value": "Get Examples By Label 1",
					"action": "Get All Examples for Label",
					"description": "Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/vision/examples"
						}
					}
				},
				{
					"name": "Provide Feedback 1",
					"value": "Provide Feedback 1",
					"action": "Create a Feedback Example",
					"description": "Adds a feedback example to the dataset associated with the specified model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/feedback"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /v2/vision/bulkfeedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 1"
					]
				}
			}
		},
		{
			"displayName": "PUT /v2/vision/bulkfeedback<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 1"
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
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/datasets/{datasetId}/examples",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Index of the example from which you want to start paging.",
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of examples to return.",
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"description": "return examples that were created in the dataset as feedback",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Feedback",
					"value": "feedback"
				},
				{
					"name": "Upload",
					"value": "upload"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/{datasetId}/examples",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Add Example"
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
						"Vision Examples"
					],
					"operation": [
						"Add Example"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/datasets/{datasetId}/examples<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Add Example"
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
						"Vision Examples"
					],
					"operation": [
						"Add Example"
					]
				}
			}
		},
		{
			"displayName": "PUT /v2/vision/datasets/{datasetId}/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 2"
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
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 2"
					]
				}
			}
		},
		{
			"displayName": "PUT /v2/vision/datasets/{datasetId}/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 2"
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
						"Vision Examples"
					],
					"operation": [
						"Update Dataset Async 2"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/vision/examples",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Get Examples By Label 1"
					]
				}
			}
		},
		{
			"displayName": "Label Id",
			"name": "labelId",
			"description": "Label Id",
			"default": "SomeLabelId",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "labelId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Get Examples By Label 1"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Index of the example from which you want to start paging.",
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples By Label 1"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Number of examples to return.",
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples By Label 1"
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
						"Vision Examples"
					],
					"operation": [
						"Get Examples By Label 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Provide Feedback 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/feedback<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Examples"
					],
					"operation": [
						"Provide Feedback 1"
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
						"Vision Examples"
					],
					"operation": [
						"Provide Feedback 1"
					]
				}
			}
		},
];
