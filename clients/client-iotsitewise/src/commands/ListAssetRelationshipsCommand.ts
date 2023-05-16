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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetRelationshipsRequest, ListAssetRelationshipsResponse } from "../models/models_0";
import { de_ListAssetRelationshipsCommand, se_ListAssetRelationshipsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListAssetRelationshipsCommand}.
 */
export interface ListAssetRelationshipsCommandInput extends ListAssetRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetRelationshipsCommand}.
 */
export interface ListAssetRelationshipsCommandOutput extends ListAssetRelationshipsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
 *       to identify an asset's root asset and all associated assets between that asset and its
 *       root.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAssetRelationshipsRequest
 *   assetId: "STRING_VALUE", // required
 *   traversalType: "PATH_TO_ROOT", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetRelationshipsResponse
 * //   assetRelationshipSummaries: [ // AssetRelationshipSummaries // required
 * //     { // AssetRelationshipSummary
 * //       hierarchyInfo: { // AssetHierarchyInfo
 * //         parentAssetId: "STRING_VALUE",
 * //         childAssetId: "STRING_VALUE",
 * //       },
 * //       relationshipType: "HIERARCHY", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetRelationshipsCommandInput - {@link ListAssetRelationshipsCommandInput}
 * @returns {@link ListAssetRelationshipsCommandOutput}
 * @see {@link ListAssetRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListAssetRelationshipsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class ListAssetRelationshipsCommand extends $Command<
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: ListAssetRelationshipsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssetRelationshipsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAssetRelationshipsCommand";
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
  private serialize(input: ListAssetRelationshipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssetRelationshipsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssetRelationshipsCommandOutput> {
    return de_ListAssetRelationshipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
