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

import { DeleteStudioRequest, DeleteStudioResponse, DeleteStudioResponseFilterSensitiveLog } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_DeleteStudioCommand, se_DeleteStudioCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandInput extends DeleteStudioRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandOutput extends DeleteStudioResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete a studio resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // DeleteStudioRequest
 *   clientToken: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStudioResponse
 * //   studio: { // Studio
 * //     adminRoleArn: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     displayName: "STRING_VALUE",
 * //     homeRegion: "STRING_VALUE",
 * //     ssoClientId: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "STUDIO_CREATED" || "STUDIO_DELETED" || "STUDIO_UPDATED" || "STUDIO_CREATE_IN_PROGRESS" || "STUDIO_UPDATE_IN_PROGRESS" || "STUDIO_DELETE_IN_PROGRESS" || "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED" || "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED" || "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED" || "AWS_SSO_NOT_ENABLED" || "AWS_SSO_ACCESS_DENIED" || "ROLE_NOT_OWNED_BY_STUDIO_OWNER" || "ROLE_COULD_NOT_BE_ASSUMED" || "INTERNAL_ERROR" || "ENCRYPTION_KEY_NOT_FOUND" || "ENCRYPTION_KEY_ACCESS_DENIED" || "AWS_SSO_CONFIGURATION_REPAIRED" || "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS" || "AWS_STS_REGION_DISABLED",
 * //     statusMessage: "STRING_VALUE",
 * //     studioEncryptionConfiguration: { // StudioEncryptionConfiguration
 * //       keyArn: "STRING_VALUE",
 * //       keyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     studioId: "STRING_VALUE",
 * //     studioName: "STRING_VALUE",
 * //     studioUrl: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     userRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteStudioCommandInput - {@link DeleteStudioCommandInput}
 * @returns {@link DeleteStudioCommandOutput}
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 */
export class DeleteStudioCommand extends $Command<
  DeleteStudioCommandInput,
  DeleteStudioCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: DeleteStudioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStudioCommandInput, DeleteStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteStudioCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "DeleteStudioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteStudioResponseFilterSensitiveLog,
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
  private serialize(input: DeleteStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStudioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStudioCommandOutput> {
    return de_DeleteStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
