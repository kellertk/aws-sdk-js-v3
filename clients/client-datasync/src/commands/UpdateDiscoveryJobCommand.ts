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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateDiscoveryJobRequest, UpdateDiscoveryJobResponse } from "../models/models_0";
import { de_UpdateDiscoveryJobCommand, se_UpdateDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateDiscoveryJobCommand}.
 */
export interface UpdateDiscoveryJobCommandInput extends UpdateDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDiscoveryJobCommand}.
 */
export interface UpdateDiscoveryJobCommandOutput extends UpdateDiscoveryJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Edits a DataSync discovery job configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateDiscoveryJobRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   CollectionDurationMinutes: Number("int"), // required
 * };
 * const command = new UpdateDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDiscoveryJobCommandInput - {@link UpdateDiscoveryJobCommandInput}
 * @returns {@link UpdateDiscoveryJobCommandOutput}
 * @see {@link UpdateDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link UpdateDiscoveryJobCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class UpdateDiscoveryJobCommand extends $Command<
  UpdateDiscoveryJobCommandInput,
  UpdateDiscoveryJobCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: UpdateDiscoveryJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDiscoveryJobCommandInput, UpdateDiscoveryJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDiscoveryJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateDiscoveryJobCommand";
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
  private serialize(input: UpdateDiscoveryJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDiscoveryJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDiscoveryJobCommandOutput> {
    return de_UpdateDiscoveryJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
