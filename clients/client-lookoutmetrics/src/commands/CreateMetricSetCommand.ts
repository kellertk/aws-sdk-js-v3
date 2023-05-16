// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateMetricSetRequest, CreateMetricSetResponse } from "../models/models_0";
import { de_CreateMetricSetCommand, se_CreateMetricSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMetricSetCommand}.
 */
export interface CreateMetricSetCommandInput extends CreateMetricSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetricSetCommand}.
 */
export interface CreateMetricSetCommandOutput extends CreateMetricSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // CreateMetricSetRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   MetricSetName: "STRING_VALUE", // required
 *   MetricSetDescription: "STRING_VALUE",
 *   MetricList: [ // MetricList // required
 *     { // Metric
 *       MetricName: "STRING_VALUE", // required
 *       AggregationFunction: "STRING_VALUE", // required
 *       Namespace: "STRING_VALUE",
 *     },
 *   ],
 *   Offset: Number("int"),
 *   TimestampColumn: { // TimestampColumn
 *     ColumnName: "STRING_VALUE",
 *     ColumnFormat: "STRING_VALUE",
 *   },
 *   DimensionList: [ // DimensionList
 *     "STRING_VALUE",
 *   ],
 *   MetricSetFrequency: "STRING_VALUE",
 *   MetricSource: { // MetricSource
 *     S3SourceConfig: { // S3SourceConfig
 *       RoleArn: "STRING_VALUE",
 *       TemplatedPathList: [ // TemplatedPathList
 *         "STRING_VALUE",
 *       ],
 *       HistoricalDataPathList: [ // HistoricalDataPathList
 *         "STRING_VALUE",
 *       ],
 *       FileFormatDescriptor: { // FileFormatDescriptor
 *         CsvFormatDescriptor: { // CsvFormatDescriptor
 *           FileCompression: "STRING_VALUE",
 *           Charset: "STRING_VALUE",
 *           ContainsHeader: true || false,
 *           Delimiter: "STRING_VALUE",
 *           HeaderList: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *           QuoteSymbol: "STRING_VALUE",
 *         },
 *         JsonFormatDescriptor: { // JsonFormatDescriptor
 *           FileCompression: "STRING_VALUE",
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     AppFlowConfig: { // AppFlowConfig
 *       RoleArn: "STRING_VALUE",
 *       FlowName: "STRING_VALUE",
 *     },
 *     CloudWatchConfig: { // CloudWatchConfig
 *       RoleArn: "STRING_VALUE",
 *       BackTestConfiguration: { // BackTestConfiguration
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *     RDSSourceConfig: { // RDSSourceConfig
 *       DBInstanceIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: { // VpcConfiguration
 *         SubnetIdList: [ // SubnetIdList // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     RedshiftSourceConfig: { // RedshiftSourceConfig
 *       ClusterIdentifier: "STRING_VALUE",
 *       DatabaseHost: "STRING_VALUE",
 *       DatabasePort: Number("int"),
 *       SecretManagerArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       VpcConfiguration: {
 *         SubnetIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdList: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     AthenaSourceConfig: { // AthenaSourceConfig
 *       RoleArn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       DataCatalog: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       WorkGroupName: "STRING_VALUE",
 *       S3ResultsPath: "STRING_VALUE",
 *       BackTestConfiguration: {
 *         RunBackTestMode: true || false, // required
 *       },
 *     },
 *   },
 *   Timezone: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DimensionFilterList: [ // MetricSetDimensionFilterList
 *     { // MetricSetDimensionFilter
 *       Name: "STRING_VALUE",
 *       FilterList: [ // FilterList
 *         { // Filter
 *           DimensionValue: "STRING_VALUE",
 *           FilterOperation: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateMetricSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetricSetResponse
 * //   MetricSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMetricSetCommandInput - {@link CreateMetricSetCommandInput}
 * @returns {@link CreateMetricSetCommandOutput}
 * @see {@link CreateMetricSetCommandInput} for command's `input` shape.
 * @see {@link CreateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class CreateMetricSetCommand extends $Command<
  CreateMetricSetCommandInput,
  CreateMetricSetCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateMetricSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMetricSetCommandInput, CreateMetricSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMetricSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "CreateMetricSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateMetricSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMetricSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMetricSetCommandOutput> {
    return de_CreateMetricSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
