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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchUpdateMemberEc2DeepInspectionStatusRequest,
  BatchUpdateMemberEc2DeepInspectionStatusResponse,
} from "../models/models_0";
import {
  de_BatchUpdateMemberEc2DeepInspectionStatusCommand,
  se_BatchUpdateMemberEc2DeepInspectionStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandInput
  extends BatchUpdateMemberEc2DeepInspectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusCommandOutput
  extends BatchUpdateMemberEc2DeepInspectionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Activates or deactivates Amazon Inspector deep inspection for the provided member accounts in your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchUpdateMemberEc2DeepInspectionStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchUpdateMemberEc2DeepInspectionStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // BatchUpdateMemberEc2DeepInspectionStatusRequest
 *   accountIds: [ // MemberAccountEc2DeepInspectionStatusList // required
 *     { // MemberAccountEc2DeepInspectionStatus
 *       accountId: "STRING_VALUE", // required
 *       activateDeepInspection: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateMemberEc2DeepInspectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateMemberEc2DeepInspectionStatusResponse
 * //   accountIds: [ // MemberAccountEc2DeepInspectionStatusStateList
 * //     { // MemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedAccountIds: [ // FailedMemberAccountEc2DeepInspectionStatusStateList
 * //     { // FailedMemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       ec2ScanStatus: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateMemberEc2DeepInspectionStatusCommandInput - {@link BatchUpdateMemberEc2DeepInspectionStatusCommandInput}
 * @returns {@link BatchUpdateMemberEc2DeepInspectionStatusCommandOutput}
 * @see {@link BatchUpdateMemberEc2DeepInspectionStatusCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateMemberEc2DeepInspectionStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class BatchUpdateMemberEc2DeepInspectionStatusCommand extends $Command<
  BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: BatchUpdateMemberEc2DeepInspectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    BatchUpdateMemberEc2DeepInspectionStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchUpdateMemberEc2DeepInspectionStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchUpdateMemberEc2DeepInspectionStatusCommand";
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
  private serialize(
    input: BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchUpdateMemberEc2DeepInspectionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateMemberEc2DeepInspectionStatusCommandOutput> {
    return de_BatchUpdateMemberEc2DeepInspectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
