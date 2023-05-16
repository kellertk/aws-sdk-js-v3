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

import { DeleteCampaignRequest, DeleteCampaignResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_DeleteCampaignCommand, se_DeleteCampaignCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandInput extends DeleteCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCampaignCommand}.
 */
export interface DeleteCampaignCommandOutput extends DeleteCampaignResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a campaign from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteCampaignCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteCampaignCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // DeleteCampaignRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   CampaignId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCampaignCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCampaignResponse
 * //   CampaignResponse: { // CampaignResponse
 * //     AdditionalTreatments: [ // ListOfTreatmentResource
 * //       { // TreatmentResource
 * //         CustomDeliveryConfiguration: { // CustomDeliveryConfiguration
 * //           DeliveryUri: "STRING_VALUE", // required
 * //           EndpointTypes: [ // ListOf__EndpointTypesElement
 * //             "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //           ],
 * //         },
 * //         Id: "STRING_VALUE", // required
 * //         MessageConfiguration: { // MessageConfiguration
 * //           ADMMessage: { // Message
 * //             Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //             Body: "STRING_VALUE",
 * //             ImageIconUrl: "STRING_VALUE",
 * //             ImageSmallIconUrl: "STRING_VALUE",
 * //             ImageUrl: "STRING_VALUE",
 * //             JsonBody: "STRING_VALUE",
 * //             MediaUrl: "STRING_VALUE",
 * //             RawContent: "STRING_VALUE",
 * //             SilentPush: true || false,
 * //             TimeToLive: Number("int"),
 * //             Title: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           APNSMessage: {
 * //             Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //             Body: "STRING_VALUE",
 * //             ImageIconUrl: "STRING_VALUE",
 * //             ImageSmallIconUrl: "STRING_VALUE",
 * //             ImageUrl: "STRING_VALUE",
 * //             JsonBody: "STRING_VALUE",
 * //             MediaUrl: "STRING_VALUE",
 * //             RawContent: "STRING_VALUE",
 * //             SilentPush: true || false,
 * //             TimeToLive: Number("int"),
 * //             Title: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           BaiduMessage: {
 * //             Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //             Body: "STRING_VALUE",
 * //             ImageIconUrl: "STRING_VALUE",
 * //             ImageSmallIconUrl: "STRING_VALUE",
 * //             ImageUrl: "STRING_VALUE",
 * //             JsonBody: "STRING_VALUE",
 * //             MediaUrl: "STRING_VALUE",
 * //             RawContent: "STRING_VALUE",
 * //             SilentPush: true || false,
 * //             TimeToLive: Number("int"),
 * //             Title: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           CustomMessage: { // CampaignCustomMessage
 * //             Data: "STRING_VALUE",
 * //           },
 * //           DefaultMessage: {
 * //             Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //             Body: "STRING_VALUE",
 * //             ImageIconUrl: "STRING_VALUE",
 * //             ImageSmallIconUrl: "STRING_VALUE",
 * //             ImageUrl: "STRING_VALUE",
 * //             JsonBody: "STRING_VALUE",
 * //             MediaUrl: "STRING_VALUE",
 * //             RawContent: "STRING_VALUE",
 * //             SilentPush: true || false,
 * //             TimeToLive: Number("int"),
 * //             Title: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           EmailMessage: { // CampaignEmailMessage
 * //             Body: "STRING_VALUE",
 * //             FromAddress: "STRING_VALUE",
 * //             HtmlBody: "STRING_VALUE",
 * //             Title: "STRING_VALUE",
 * //           },
 * //           GCMMessage: {
 * //             Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 * //             Body: "STRING_VALUE",
 * //             ImageIconUrl: "STRING_VALUE",
 * //             ImageSmallIconUrl: "STRING_VALUE",
 * //             ImageUrl: "STRING_VALUE",
 * //             JsonBody: "STRING_VALUE",
 * //             MediaUrl: "STRING_VALUE",
 * //             RawContent: "STRING_VALUE",
 * //             SilentPush: true || false,
 * //             TimeToLive: Number("int"),
 * //             Title: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           SMSMessage: { // CampaignSmsMessage
 * //             Body: "STRING_VALUE",
 * //             MessageType: "TRANSACTIONAL" || "PROMOTIONAL",
 * //             OriginationNumber: "STRING_VALUE",
 * //             SenderId: "STRING_VALUE",
 * //             EntityId: "STRING_VALUE",
 * //             TemplateId: "STRING_VALUE",
 * //           },
 * //           InAppMessage: { // CampaignInAppMessage
 * //             Body: "STRING_VALUE",
 * //             Content: [ // ListOfInAppMessageContent
 * //               { // InAppMessageContent
 * //                 BackgroundColor: "STRING_VALUE",
 * //                 BodyConfig: { // InAppMessageBodyConfig
 * //                   Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //                   Body: "STRING_VALUE", // required
 * //                   TextColor: "STRING_VALUE", // required
 * //                 },
 * //                 HeaderConfig: { // InAppMessageHeaderConfig
 * //                   Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //                   Header: "STRING_VALUE", // required
 * //                   TextColor: "STRING_VALUE", // required
 * //                 },
 * //                 ImageUrl: "STRING_VALUE",
 * //                 PrimaryBtn: { // InAppMessageButton
 * //                   Android: { // OverrideButtonConfiguration
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                   },
 * //                   DefaultConfig: { // DefaultButtonConfiguration
 * //                     BackgroundColor: "STRING_VALUE",
 * //                     BorderRadius: Number("int"),
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                     Text: "STRING_VALUE", // required
 * //                     TextColor: "STRING_VALUE",
 * //                   },
 * //                   IOS: {
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                   },
 * //                   Web: {
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 SecondaryBtn: {
 * //                   Android: {
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                   },
 * //                   DefaultConfig: {
 * //                     BackgroundColor: "STRING_VALUE",
 * //                     BorderRadius: Number("int"),
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                     Text: "STRING_VALUE", // required
 * //                     TextColor: "STRING_VALUE",
 * //                   },
 * //                   IOS: {
 * //                     ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                     Link: "STRING_VALUE",
 * //                   },
 * //                   Web: "<OverrideButtonConfiguration>",
 * //                 },
 * //               },
 * //             ],
 * //             CustomConfig: { // MapOf__string
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             Layout: "BOTTOM_BANNER" || "TOP_BANNER" || "OVERLAYS" || "MOBILE_FEED" || "MIDDLE_BANNER" || "CAROUSEL",
 * //           },
 * //         },
 * //         Schedule: { // Schedule
 * //           EndTime: "STRING_VALUE",
 * //           EventFilter: { // CampaignEventFilter
 * //             Dimensions: { // EventDimensions
 * //               Attributes: { // MapOfAttributeDimension
 * //                 "<keys>": { // AttributeDimension
 * //                   AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //                   Values: [ // ListOf__string // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               EventType: { // SetDimension
 * //                 DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //                 Values: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Metrics: { // MapOfMetricDimension
 * //                 "<keys>": { // MetricDimension
 * //                   ComparisonOperator: "STRING_VALUE", // required
 * //                   Value: Number("double"), // required
 * //                 },
 * //               },
 * //             },
 * //             FilterType: "SYSTEM" || "ENDPOINT", // required
 * //           },
 * //           Frequency: "ONCE" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "EVENT" || "IN_APP_EVENT",
 * //           IsLocalTime: true || false,
 * //           QuietTime: { // QuietTime
 * //             End: "STRING_VALUE",
 * //             Start: "STRING_VALUE",
 * //           },
 * //           StartTime: "STRING_VALUE", // required
 * //           Timezone: "STRING_VALUE",
 * //         },
 * //         SizePercent: Number("int"), // required
 * //         State: { // CampaignState
 * //           CampaignStatus: "SCHEDULED" || "EXECUTING" || "PENDING_NEXT_RUN" || "COMPLETED" || "PAUSED" || "DELETED" || "INVALID",
 * //         },
 * //         TemplateConfiguration: { // TemplateConfiguration
 * //           EmailTemplate: { // Template
 * //             Name: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //           },
 * //           PushTemplate: {
 * //             Name: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //           },
 * //           SMSTemplate: {
 * //             Name: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //           },
 * //           VoiceTemplate: {
 * //             Name: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //           },
 * //         },
 * //         TreatmentDescription: "STRING_VALUE",
 * //         TreatmentName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ApplicationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreationDate: "STRING_VALUE", // required
 * //     CustomDeliveryConfiguration: {
 * //       DeliveryUri: "STRING_VALUE", // required
 * //       EndpointTypes: [
 * //         "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //       ],
 * //     },
 * //     DefaultState: {
 * //       CampaignStatus: "SCHEDULED" || "EXECUTING" || "PENDING_NEXT_RUN" || "COMPLETED" || "PAUSED" || "DELETED" || "INVALID",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     HoldoutPercent: Number("int"),
 * //     Hook: { // CampaignHook
 * //       LambdaFunctionName: "STRING_VALUE",
 * //       Mode: "DELIVERY" || "FILTER",
 * //       WebUrl: "STRING_VALUE",
 * //     },
 * //     Id: "STRING_VALUE", // required
 * //     IsPaused: true || false,
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     Limits: { // CampaignLimits
 * //       Daily: Number("int"),
 * //       MaximumDuration: Number("int"),
 * //       MessagesPerSecond: Number("int"),
 * //       Total: Number("int"),
 * //       Session: Number("int"),
 * //     },
 * //     MessageConfiguration: {
 * //       ADMMessage: "<Message>",
 * //       APNSMessage: "<Message>",
 * //       BaiduMessage: "<Message>",
 * //       CustomMessage: {
 * //         Data: "STRING_VALUE",
 * //       },
 * //       DefaultMessage: "<Message>",
 * //       EmailMessage: {
 * //         Body: "STRING_VALUE",
 * //         FromAddress: "STRING_VALUE",
 * //         HtmlBody: "STRING_VALUE",
 * //         Title: "STRING_VALUE",
 * //       },
 * //       GCMMessage: "<Message>",
 * //       SMSMessage: {
 * //         Body: "STRING_VALUE",
 * //         MessageType: "TRANSACTIONAL" || "PROMOTIONAL",
 * //         OriginationNumber: "STRING_VALUE",
 * //         SenderId: "STRING_VALUE",
 * //         EntityId: "STRING_VALUE",
 * //         TemplateId: "STRING_VALUE",
 * //       },
 * //       InAppMessage: {
 * //         Body: "STRING_VALUE",
 * //         Content: [
 * //           {
 * //             BackgroundColor: "STRING_VALUE",
 * //             BodyConfig: {
 * //               Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //               Body: "STRING_VALUE", // required
 * //               TextColor: "STRING_VALUE", // required
 * //             },
 * //             HeaderConfig: {
 * //               Alignment: "LEFT" || "CENTER" || "RIGHT", // required
 * //               Header: "STRING_VALUE", // required
 * //               TextColor: "STRING_VALUE", // required
 * //             },
 * //             ImageUrl: "STRING_VALUE",
 * //             PrimaryBtn: {
 * //               Android: "<OverrideButtonConfiguration>",
 * //               DefaultConfig: {
 * //                 BackgroundColor: "STRING_VALUE",
 * //                 BorderRadius: Number("int"),
 * //                 ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                 Link: "STRING_VALUE",
 * //                 Text: "STRING_VALUE", // required
 * //                 TextColor: "STRING_VALUE",
 * //               },
 * //               IOS: "<OverrideButtonConfiguration>",
 * //               Web: "<OverrideButtonConfiguration>",
 * //             },
 * //             SecondaryBtn: {
 * //               Android: "<OverrideButtonConfiguration>",
 * //               DefaultConfig: {
 * //                 BackgroundColor: "STRING_VALUE",
 * //                 BorderRadius: Number("int"),
 * //                 ButtonAction: "LINK" || "DEEP_LINK" || "CLOSE", // required
 * //                 Link: "STRING_VALUE",
 * //                 Text: "STRING_VALUE", // required
 * //                 TextColor: "STRING_VALUE",
 * //               },
 * //               IOS: "<OverrideButtonConfiguration>",
 * //               Web: "<OverrideButtonConfiguration>",
 * //             },
 * //           },
 * //         ],
 * //         CustomConfig: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Layout: "BOTTOM_BANNER" || "TOP_BANNER" || "OVERLAYS" || "MOBILE_FEED" || "MIDDLE_BANNER" || "CAROUSEL",
 * //       },
 * //     },
 * //     Name: "STRING_VALUE",
 * //     Schedule: {
 * //       EndTime: "STRING_VALUE",
 * //       EventFilter: {
 * //         Dimensions: {
 * //           Attributes: {
 * //             "<keys>": {
 * //               AttributeType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEFORE" || "AFTER" || "ON" || "BETWEEN",
 * //               Values: "<ListOf__string>", // required
 * //             },
 * //           },
 * //           EventType: {
 * //             DimensionType: "INCLUSIVE" || "EXCLUSIVE",
 * //             Values: "<ListOf__string>", // required
 * //           },
 * //           Metrics: {
 * //             "<keys>": {
 * //               ComparisonOperator: "STRING_VALUE", // required
 * //               Value: Number("double"), // required
 * //             },
 * //           },
 * //         },
 * //         FilterType: "SYSTEM" || "ENDPOINT", // required
 * //       },
 * //       Frequency: "ONCE" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "EVENT" || "IN_APP_EVENT",
 * //       IsLocalTime: true || false,
 * //       QuietTime: {
 * //         End: "STRING_VALUE",
 * //         Start: "STRING_VALUE",
 * //       },
 * //       StartTime: "STRING_VALUE", // required
 * //       Timezone: "STRING_VALUE",
 * //     },
 * //     SegmentId: "STRING_VALUE", // required
 * //     SegmentVersion: Number("int"), // required
 * //     State: {
 * //       CampaignStatus: "SCHEDULED" || "EXECUTING" || "PENDING_NEXT_RUN" || "COMPLETED" || "PAUSED" || "DELETED" || "INVALID",
 * //     },
 * //     tags: "<MapOf__string>",
 * //     TemplateConfiguration: {
 * //       EmailTemplate: {
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       PushTemplate: "<Template>",
 * //       SMSTemplate: "<Template>",
 * //       VoiceTemplate: "<Template>",
 * //     },
 * //     TreatmentDescription: "STRING_VALUE",
 * //     TreatmentName: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     Priority: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCampaignCommandInput - {@link DeleteCampaignCommandInput}
 * @returns {@link DeleteCampaignCommandOutput}
 * @see {@link DeleteCampaignCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class DeleteCampaignCommand extends $Command<
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: DeleteCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCampaignCommandInput, DeleteCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "DeleteCampaignCommand";
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
  private serialize(input: DeleteCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCampaignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCampaignCommandOutput> {
    return de_DeleteCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
