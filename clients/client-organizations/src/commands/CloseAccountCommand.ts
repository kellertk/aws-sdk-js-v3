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

import { CloseAccountRequest } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_CloseAccountCommand, se_CloseAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CloseAccountCommand}.
 */
export interface CloseAccountCommandInput extends CloseAccountRequest {}
/**
 * @public
 *
 * The output of {@link CloseAccountCommand}.
 */
export interface CloseAccountCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Closes an Amazon Web Services member account within an organization. You can close an account when
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all
 *                 features are enabled </a>. You can't close the management account with this API.
 *             This is an asynchronous request that Amazon Web Services performs in the background. Because
 *                 <code>CloseAccount</code> operates asynchronously, it can return a successful
 *             completion message even though account closure might still be in progress. You need to
 *             wait a few minutes before the account is fully closed. To check the status of the
 *             request, do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code>
 *                     request to provide as a parameter to the <a>DescribeAccount</a>
 *                     operation. </p>
 *                <p>While the close account request is in progress, Account status will indicate
 *                     PENDING_CLOSURE. When the close account request completes, the status will
 *                     change to SUSPENDED. </p>
 *             </li>
 *             <li>
 *                <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets
 *                     published after the account closes successfully. For information on using CloudTrail
 *                     with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You can close only 10% of member accounts, between 10 and 200, within a
 *                         rolling 30 day period. This quota is not bound by a calendar month, but
 *                         starts when you close an account.</p>
 *                   <p>After you reach this limit, you can close additional accounts in the
 *                         Billing console. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html">Closing an
 *                             account</a> in the Amazon Web Services Billing and Cost Management User Guide.</p>
 *                </li>
 *                <li>
 *                   <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day
 *                         grace period while the account is in SUSPENDED status. </p>
 *                </li>
 *                <li>
 *                   <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud
 *                         (US) account, the <code>CloseAccount</code> request will close both
 *                         accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html">
 *                             Closing an Amazon Web Services GovCloud (US) account</a> in the <i>
 *                             Amazon Web Services GovCloud User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
 *                 Amazon Web Services account</a> in the <i>Organizations User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CloseAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CloseAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // CloseAccountRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new CloseAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CloseAccountCommandInput - {@link CloseAccountCommandInput}
 * @returns {@link CloseAccountCommandOutput}
 * @see {@link CloseAccountCommandInput} for command's `input` shape.
 * @see {@link CloseAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide.</i>
 *          </p>
 *
 * @throws {@link AccountAlreadyClosedException} (client fault)
 *  <p>You attempted to close an account that is already closed.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p> We can't find an Amazon Web Services account with the <code>AccountId</code> that you specified, or
 *             the account whose credentials you used to make this request isn't a member of an
 *             organization.</p>
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *  <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because it conflicts with the current state of the specified
 *             resource.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Performing this operation violates a minimum or maximum value limit. For example,
 *             attempting to remove the last service control policy (SCP) from an OU or root, inviting
 *             or creating too many accounts to the organization, or attaching too many policies to an
 *             account, OU, or root. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_ORGANIZATION: You attempted to remove the management
 *                     account from the organization. You can't remove the management account. Instead,
 *                     after you remove all member accounts, delete the organization itself.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an
 *                     account from the organization that doesn't yet have enough information to exist
 *                     as a standalone account. This account requires you to first complete phone
 *                     verification. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#orgs_manage_accounts_remove-from-master">Removing a member account from your organization</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can create in one day.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_NOT_COMPLETE: Your account setup isn't complete or your account isn't fully active. You must complete the account setup before you create an organization.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number
 *                     of accounts in an organization. If you need more accounts, contact <a href="https://docs.aws.amazon.com/support/home#/">Amazon Web Services Support</a> to
 *                     request an increase in your limit. </p>
 *                <p>Or the number of invitations that you tried to send would cause you to exceed
 *                     the limit of accounts in your organization. Send fewer invitations or contact
 *                     Amazon Web Services Support to request an increase in the number of accounts.</p>
 *                <note>
 *                   <p>Deleted and closed accounts still count toward your limit.</p>
 *                </note>
 *                <important>
 *                   <p>If you get this exception when running a command immediately after
 *                         creating the organization, wait one hour and try again. After an hour, if
 *                         the command continues to fail with this error, contact <a href="https://docs.aws.amazon.com/support/home#/">Amazon Web Services
 *                         Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR: You attempted to register
 *                     the management account of the organization as a delegated administrator for an
 *                     Amazon Web Services service integrated with Organizations. You can designate only a member account as a
 *                     delegated administrator.</p>
 *             </li>
 *             <li>
 *                <p>CANNOT_CLOSE_MANAGEMENT_ACCOUNT: You attempted to close the management
 *                     account. To close the management account for the organization, you must first
 *                     either remove or close all member accounts in the organization. Follow standard
 *                     account closure process using root credentials.​ </p>
 *             </li>
 *             <li>
 *                <p>CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG: You attempted to remove an
 *                     account that is registered as a delegated administrator for a service integrated
 *                     with your organization. To complete this operation, you must first deregister
 *                     this account as a delegated administrator. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_QUOTA_EXCEEDED: You have exceeded close account quota for the
 *                     past 30 days. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can close at a time. ​ </p>
 *             </li>
 *             <li>
 *                <p>CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION: To create an
 *                     organization in the specified region, you must enable all features mode.</p>
 *             </li>
 *             <li>
 *                <p>DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE: You attempted to register an
 *                     Amazon Web Services account as a delegated administrator for an Amazon Web Services service that already has
 *                     a delegated administrator. To complete this operation, you must first deregister
 *                     any existing delegated administrators for this service.</p>
 *             </li>
 *             <li>
 *                <p>EMAIL_VERIFICATION_CODE_EXPIRED: The email verification code is only valid for
 *                     a limited period of time. You must resubmit the request and generate a new
 *                     verfication code.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     handshakes that you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAYMENT_INSTRUMENT: You cannot remove an account because no supported
 *                     payment method is associated with the account. Amazon Web Services does not support cards
 *                     issued by financial institutions in Russia or Belarus. For more information, see
 *                         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html">Managing your
 *                         Amazon Web Services payments</a>.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in
 *                     this organization, you first must migrate the organization's management account
 *                     to the marketplace that corresponds to the management account's address. For
 *                     example, accounts with India addresses must be associated with the AISPL
 *                     marketplace. All accounts in an organization must be associated with the same
 *                     marketplace.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE: Applies only to the Amazon Web Services /> Regions
 *                     in China. To create an organization, the master must have a valid business
 *                     license. For more information, contact customer support.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must
 *                     first provide a valid contact address and phone number for the management
 *                     account. Then try the operation again.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: To complete this operation, the
 *                     management account must have an associated account in the Amazon Web Services GovCloud
 *                     (US-West) Region. For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a>
 *                     in the
 *                     <i>Amazon Web Services GovCloud User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with
 *                     this management account, you first must associate a valid payment instrument,
 *                     such as a credit card, with the account. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet
 *                         been provided</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED: You attempted to
 *                     register more delegated administrators than allowed for the service principal.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number
 *                     of policies of a certain type that can be attached to an entity at one
 *                     time.</p>
 *             </li>
 *             <li>
 *                <p>MAX_TAG_LIMIT_EXCEEDED: You have exceeded the number of tags allowed on this
 *                     resource. </p>
 *             </li>
 *             <li>
 *                <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with
 *                     this member account, you first must associate a valid payment instrument, such
 *                     as a credit card, with the account. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet
 *                         been provided</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy
 *                     from an entity that would cause the entity to have fewer than the minimum number
 *                     of policies of a certain type required.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation
 *                     that requires the organization to be configured to support all features. An
 *                     organization that supports only consolidated billing features can't perform this
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many
 *                     levels deep.</p>
 *             </li>
 *             <li>
 *                <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you
 *                     can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_CONTENT_LIMIT_EXCEEDED: You attempted to create a policy that is larger
 *                     than the maximum size.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of policies
 *                     that you can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>SERVICE_ACCESS_NOT_ENABLED: You attempted to register a delegated
 *                     administrator before you enabled service access. Call the
 *                         <code>EnableAWSServiceAccess</code> API first.</p>
 *             </li>
 *             <li>
 *                <p>TAG_POLICY_VIOLATION: You attempted to create or update a resource with tags
 *                     that are not compliant with the tag policy requirements for this account.</p>
 *             </li>
 *             <li>
 *                <p>WAIT_PERIOD_ACTIVE: After you create an Amazon Web Services account, there is a waiting
 *                     period before you can remove it from the organization. If you get an error that
 *                     indicates that a wait period is required, try again in a few days.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The requested operation failed because you provided invalid values for one or more of
 *             the request parameters. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be
 *                     modified.</p>
 *             </li>
 *             <li>
 *                <p>INPUT_REQUIRED: You must include a value for all required parameters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the
 *                     invited account owner.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM: You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least
 *                     one invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code>
 *                     parameter from the response to a previous call of the operation.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account,
 *                     organization, or email) as a party.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN: You provided a value that doesn't match the required
 *                     pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match
 *                     the required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name
 *                     can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name
 *                     (ARN) for the organization.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag.
 *                     You can’t add, edit, or delete system tag keys because they're reserved for
 *                     Amazon Web Services use. System tags don’t count against your tags per resource limit.</p>
 *             </li>
 *             <li>
 *                <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between
 *                     entities in the same root.</p>
 *             </li>
 *             <li>
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a>in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *
 * @throws {@link UnsupportedAPIEndpointException} (client fault)
 *  <p>This action isn't available in the current Amazon Web Services Region.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 */
export class CloseAccountCommand extends $Command<
  CloseAccountCommandInput,
  CloseAccountCommandOutput,
  OrganizationsClientResolvedConfig
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
  constructor(readonly input: CloseAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloseAccountCommandInput, CloseAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CloseAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CloseAccountCommand";
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
  private serialize(input: CloseAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CloseAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseAccountCommandOutput> {
    return de_CloseAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
