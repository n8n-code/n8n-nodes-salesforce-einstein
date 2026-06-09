import type { INodeProperties } from 'n8n-workflow';

export const languagePredictionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					]
				}
			},
			"options": [
				{
					"name": "Intent Multipart",
					"value": "Intent Multipart",
					"action": "Prediction for Intent",
					"description": "Returns an intent prediction for the given string.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/intent"
						}
					}
				},
				{
					"name": "Sentiment Multipart",
					"value": "Sentiment Multipart",
					"action": "Prediction for Sentiment",
					"description": "Returns a sentiment prediction for the given string.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/language/sentiment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v2/language/intent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "I can't tell you how much fun it was",
			"description": "Text for which you want to return an intent prediction.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Model Id",
			"name": "modelId",
			"type": "string",
			"default": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
			"description": "ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.",
			"routing": {
				"send": {
					"property": "modelId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
					]
				}
			}
		},
		{
			"displayName": "Num Results",
			"name": "numResults",
			"type": "number",
			"default": 3,
			"description": "Number of probabilities to return. ",
			"routing": {
				"send": {
					"property": "numResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Id",
			"name": "sampleId",
			"type": "string",
			"default": "",
			"description": "String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.",
			"routing": {
				"send": {
					"property": "sampleId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
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
						"Language Prediction"
					],
					"operation": [
						"Intent Multipart"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/language/sentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "I can't tell you how much fun it was",
			"description": "Text for which you want to return a sentiment prediction.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Model Id",
			"name": "modelId",
			"type": "string",
			"default": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
			"description": "ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.",
			"routing": {
				"send": {
					"property": "modelId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
					]
				}
			}
		},
		{
			"displayName": "Num Results",
			"name": "numResults",
			"type": "number",
			"default": 3,
			"description": "Number of probabilities to return. ",
			"routing": {
				"send": {
					"property": "numResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Id",
			"name": "sampleId",
			"type": "string",
			"default": "",
			"description": "String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.",
			"routing": {
				"send": {
					"property": "sampleId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
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
						"Language Prediction"
					],
					"operation": [
						"Sentiment Multipart"
					]
				}
			}
		},
];
