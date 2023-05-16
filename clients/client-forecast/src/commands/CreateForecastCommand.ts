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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateForecastRequest,
  CreateForecastRequestFilterSensitiveLog,
  CreateForecastResponse,
} from "../models/models_0";
import { de_CreateForecastCommand, se_CreateForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateForecastCommand}.
 */
export interface CreateForecastCommandInput extends CreateForecastRequest {}
/**
 * @public
 *
 * The output of {@link CreateForecastCommand}.
 */
export interface CreateForecastCommandOutput extends CreateForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was
 *       used to train the predictor. This is known as inference. To retrieve the forecast for a single
 *       item at low latency, use the  operation. To
 *       export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p>
 *          <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which
 *       you specify in the <a>CreatePredictor</a> request. When you query a forecast, you
 *       can request a specific date range within the forecast.</p>
 *          <p>To get a list of all your forecasts, use the <a>ListForecasts</a>
 *       operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
 *         or export the forecast. Use the <a>DescribeForecast</a> operation to get the
 *         status.</p>
 *          </note>
 *          <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor.
 *       However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateForecastRequest
 *   ForecastName: "STRING_VALUE", // required
 *   PredictorArn: "STRING_VALUE", // required
 *   ForecastTypes: [ // ForecastTypes
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TimeSeriesSelector: { // TimeSeriesSelector
 *     TimeSeriesIdentifiers: { // TimeSeriesIdentifiers
 *       DataSource: { // DataSource
 *         S3Config: { // S3Config
 *           Path: "STRING_VALUE", // required
 *           RoleArn: "STRING_VALUE", // required
 *           KMSKeyArn: "STRING_VALUE",
 *         },
 *       },
 *       Schema: { // Schema
 *         Attributes: [ // SchemaAttributes
 *           { // SchemaAttribute
 *             AttributeName: "STRING_VALUE",
 *             AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *           },
 *         ],
 *       },
 *       Format: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateForecastCommand(input);
 * const response = await client.send(command);
 * // { // CreateForecastResponse
 * //   ForecastArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateForecastCommandInput - {@link CreateForecastCommandInput}
 * @returns {@link CreateForecastCommandOutput}
 * @see {@link CreateForecastCommandInput} for command's `input` shape.
 * @see {@link CreateForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class CreateForecastCommand extends $Command<
  CreateForecastCommandInput,
  CreateForecastCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: CreateForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateForecastCommandInput, CreateForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateForecastRequestFilterSensitiveLog,
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
  private serialize(input: CreateForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateForecastCommandOutput> {
    return de_CreateForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
