import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { checkApiUsageDescription } from './resources/check-api-usage';
import { authorizationDescription } from './resources/authorization';
import { visionDatasetsDescription } from './resources/vision-datasets';
import { visionExamplesDescription } from './resources/vision-examples';
import { visionTrainingDescription } from './resources/vision-training';
import { visionModelsDescription } from './resources/vision-models';
import { visionPredictionDescription } from './resources/vision-prediction';
import { languageDatasetsDescription } from './resources/language-datasets';
import { languageExamplesDescription } from './resources/language-examples';
import { languageTrainingDescription } from './resources/language-training';
import { languageModelsDescription } from './resources/language-models';
import { languagePredictionDescription } from './resources/language-prediction';

export class SalesforceEinstein implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Salesforce Einstein',
		name: 'N8nDevSalesforceEinstein',
		icon: { light: 'file:./salesforce-einstein.svg', dark: 'file:./salesforce-einstein.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Provided by Salesforce � Copyright 2000�2020 salesforce.com, inc. All rights reserved. Salesforce is a registered trademark of salesforce.com, inc., as are other n..',
		defaults: { name: 'Salesforce Einstein' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevSalesforceEinsteinApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Check API Usage",
					"value": "Check API Usage",
					"description": "Resources that let you get API usage information."
				},
				{
					"name": "Authorization",
					"value": "Authorization",
					"description": "Resources that manage authorization tokens."
				},
				{
					"name": "Vision Datasets",
					"value": "Vision Datasets",
					"description": "Resources that manage image datasets."
				},
				{
					"name": "Vision Examples",
					"value": "Vision Examples",
					"description": "Resources that manage image examples."
				},
				{
					"name": "Vision Training",
					"value": "Vision Training",
					"description": "Resources that handle image dataset training."
				},
				{
					"name": "Vision Models",
					"value": "Vision Models",
					"description": "Resources that manage image models and model metrics."
				},
				{
					"name": "Vision Prediction",
					"value": "Vision Prediction",
					"description": "Resources that return predictions for image input."
				},
				{
					"name": "Language Datasets",
					"value": "Language Datasets",
					"description": "Resources that manage text datasets."
				},
				{
					"name": "Language Examples",
					"value": "Language Examples",
					"description": "Resources that manage text examples."
				},
				{
					"name": "Language Training",
					"value": "Language Training",
					"description": "Resources that handle text dataset training."
				},
				{
					"name": "Language Models",
					"value": "Language Models",
					"description": "Resources that manage text models and model metrics."
				},
				{
					"name": "Language Prediction",
					"value": "Language Prediction",
					"description": "Resources that return predictions for text input."
				}
			],
			"default": ""
		},
		...checkApiUsageDescription,
		...authorizationDescription,
		...visionDatasetsDescription,
		...visionExamplesDescription,
		...visionTrainingDescription,
		...visionModelsDescription,
		...visionPredictionDescription,
		...languageDatasetsDescription,
		...languageExamplesDescription,
		...languageTrainingDescription,
		...languageModelsDescription,
		...languagePredictionDescription
		],
	};
}
