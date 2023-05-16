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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetServerStrategiesRequest, GetServerStrategiesResponse } from "../models/models_0";
import { de_GetServerStrategiesCommand, se_GetServerStrategiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetServerStrategiesCommand}.
 */
export interface GetServerStrategiesCommandInput extends GetServerStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link GetServerStrategiesCommand}.
 */
export interface GetServerStrategiesCommandOutput extends GetServerStrategiesResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves recommended strategies and tools for the specified server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetServerStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetServerStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetServerStrategiesRequest
 *   serverId: "STRING_VALUE", // required
 * };
 * const command = new GetServerStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // GetServerStrategiesResponse
 * //   serverStrategies: [ // ServerStrategies
 * //     { // ServerStrategy
 * //       recommendation: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //       numberOfApplicationComponents: Number("int"),
 * //       isPreferred: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServerStrategiesCommandInput - {@link GetServerStrategiesCommandInput}
 * @returns {@link GetServerStrategiesCommandOutput}
 * @see {@link GetServerStrategiesCommandInput} for command's `input` shape.
 * @see {@link GetServerStrategiesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetServerStrategiesCommand extends $Command<
  GetServerStrategiesCommandInput,
  GetServerStrategiesCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: GetServerStrategiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServerStrategiesCommandInput, GetServerStrategiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServerStrategiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetServerStrategiesCommand";
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
  private serialize(input: GetServerStrategiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServerStrategiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServerStrategiesCommandOutput> {
    return de_GetServerStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
