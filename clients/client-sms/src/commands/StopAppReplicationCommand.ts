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

import { StopAppReplicationRequest, StopAppReplicationResponse } from "../models/models_0";
import { de_StopAppReplicationCommand, se_StopAppReplicationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 *
 * The input for {@link StopAppReplicationCommand}.
 */
export interface StopAppReplicationCommandInput extends StopAppReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopAppReplicationCommand}.
 */
export interface StopAppReplicationCommandOutput extends StopAppReplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops replicating the specified application by deleting the replication job for each server in
 *             the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StopAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StopAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // StopAppReplicationRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new StopAppReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAppReplicationCommandInput - {@link StopAppReplicationCommandInput}
 * @returns {@link StopAppReplicationCommandOutput}
 * @see {@link StopAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StopAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class StopAppReplicationCommand extends $Command<
  StopAppReplicationCommandInput,
  StopAppReplicationCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: StopAppReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopAppReplicationCommandInput, StopAppReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopAppReplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StopAppReplicationCommand";
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
  private serialize(input: StopAppReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopAppReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAppReplicationCommandOutput> {
    return de_StopAppReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
