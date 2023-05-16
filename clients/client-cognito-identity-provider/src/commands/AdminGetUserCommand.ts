// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  AdminGetUserRequest,
  AdminGetUserRequestFilterSensitiveLog,
  AdminGetUserResponse,
  AdminGetUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AdminGetUserCommand, se_AdminGetUserCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminGetUserCommand}.
 */
export interface AdminGetUserCommandInput extends AdminGetUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminGetUserCommand}.
 */
export interface AdminGetUserCommandOutput extends AdminGetUserResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified user by user name in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminGetUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminGetUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminGetUserCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetUserResponse
 * //   Username: "STRING_VALUE", // required
 * //   UserAttributes: [ // AttributeListType
 * //     { // AttributeType
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UserCreateDate: new Date("TIMESTAMP"),
 * //   UserLastModifiedDate: new Date("TIMESTAMP"),
 * //   Enabled: true || false,
 * //   UserStatus: "UNCONFIRMED" || "CONFIRMED" || "ARCHIVED" || "COMPROMISED" || "UNKNOWN" || "RESET_REQUIRED" || "FORCE_CHANGE_PASSWORD",
 * //   MFAOptions: [ // MFAOptionListType
 * //     { // MFAOptionType
 * //       DeliveryMedium: "SMS" || "EMAIL",
 * //       AttributeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PreferredMfaSetting: "STRING_VALUE",
 * //   UserMFASettingList: [ // UserMFASettingListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminGetUserCommandInput - {@link AdminGetUserCommandInput}
 * @returns {@link AdminGetUserCommandOutput}
 * @see {@link AdminGetUserCommandInput} for command's `input` shape.
 * @see {@link AdminGetUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminGetUserCommand extends $Command<
  AdminGetUserCommandInput,
  AdminGetUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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
  constructor(readonly input: AdminGetUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminGetUserCommandInput, AdminGetUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AdminGetUserCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminGetUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminGetUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminGetUserResponseFilterSensitiveLog,
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
  private serialize(input: AdminGetUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminGetUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminGetUserCommandOutput> {
    return de_AdminGetUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
