import type { INodeProperties } from 'n8n-workflow';

export const visionPredictionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					]
				}
			},
			"options": [
				{
					"name": "Detect Multipart",
					"value": "Detect Multipart",
					"action": "Detection with Image File",
					"description": "Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/detect"
						}
					}
				},
				{
					"name": "Ocr Multipart",
					"value": "Ocr Multipart",
					"action": "Detect Text",
					"description": "Returns a prediction from an OCR model for the specified image URL or local image file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/ocr"
						}
					}
				},
				{
					"name": "Predict Multipart",
					"value": "Predict Multipart",
					"action": "Make Prediction",
					"description": "Returns a prediction from an image or multi-label model for the specified image.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v2/vision/predict"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v2/vision/detect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Model ID",
			"name": "modelId",
			"type": "string",
			"default": "YCQ4ZACEPJFGXZNRA6ERF3GL5E",
			"description": "ID of the model that makes the detection.",
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
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Base 64 Content",
			"name": "sampleBase64Content",
			"type": "string",
			"default": "SomeBase64EncodedImage",
			"description": "The image contained in a base64 string.",
			"routing": {
				"send": {
					"property": "sampleBase64Content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample ID",
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
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Location",
			"name": "sampleLocation",
			"type": "string",
			"default": "",
			"description": "URL of the image file.",
			"routing": {
				"send": {
					"property": "sampleLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
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
						"Vision Prediction"
					],
					"operation": [
						"Detect Multipart"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/ocr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Ocr Multipart"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/ocr<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Ocr Multipart"
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
						"Vision Prediction"
					],
					"operation": [
						"Ocr Multipart"
					]
				}
			}
		},
		{
			"displayName": "POST /v2/vision/predict",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Model ID",
			"name": "modelId",
			"type": "string",
			"default": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
			"description": "ID of the model that makes the prediction.",
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
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
		{
			"displayName": "Num Results",
			"name": "numResults",
			"type": "number",
			"default": 3,
			"description": "Number of probabilities to return.",
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
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Base 64 Content",
			"name": "sampleBase64Content",
			"type": "string",
			"default": "SomeBase64EncodedImage",
			"description": "The image contained in a base64 string.",
			"routing": {
				"send": {
					"property": "sampleBase64Content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample ID",
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
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
		{
			"displayName": "Sample Location",
			"name": "sampleLocation",
			"type": "string",
			"default": "",
			"description": "URL of the image file.",
			"routing": {
				"send": {
					"property": "sampleLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
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
						"Vision Prediction"
					],
					"operation": [
						"Predict Multipart"
					]
				}
			}
		},
];
