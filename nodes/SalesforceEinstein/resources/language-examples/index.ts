import type { INodeProperties } from 'n8n-workflow';

export const languageExamplesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					]
				}
			},
			"options": [
				{
					"name": "Get Examples",
					"value": "Get Examples",
					"action": "Get All Examples",
					"description": "Returns all the examples for the specified dataset,",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/datasets/{{$parameter[\"datasetId\"]}}/examples"
						}
					}
				},
				{
					"name": "Update Dataset Async",
					"value": "Update Dataset Async",
					"action": "Create Examples From a File",
					"description": "Adds examples from a .csv, .tsv, or .json file to a dataset.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v2/language/datasets/{{$parameter[\"datasetId\"]}}/upload"
						}
					}
				},
				{
					"name": "Get Examples By Label",
					"value": "Get Examples By Label",
					"action": "Get All Examples for Label",
					"description": "Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/language/examples"
						}
					}
				},
				{
					"name": "Provide Feedback",
					"value": "Provide Feedback",
					"action": "Create a Feedback Example",
					"description": "Adds a feedback example to the dataset associated with the specified model.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/feedback"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/language/datasets/{datasetId}/examples",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Get Examples"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples"
					]
				}
			}
		},
		{
			"displayName": "PUT /v2/language/datasets/{datasetId}/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Update Dataset Async"
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
						"Language Examples"
					],
					"operation": [
						"Update Dataset Async"
					]
				}
			}
		},
		{
			"displayName": "PUT /v2/language/datasets/{datasetId}/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Update Dataset Async"
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
						"Language Examples"
					],
					"operation": [
						"Update Dataset Async"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/language/examples",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Get Examples By Label"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples By Label"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples By Label"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples By Label"
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
						"Language Examples"
					],
					"operation": [
						"Get Examples By Label"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/feedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Provide Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/feedback<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Examples"
					],
					"operation": [
						"Provide Feedback"
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
						"Language Examples"
					],
					"operation": [
						"Provide Feedback"
					]
				}
			}
		},
];
