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
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { DescribePlacementRequest, DescribePlacementResponse } from "../models/models_0";
import { de_DescribePlacementCommand, se_DescribePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribePlacementCommand}.
 */
export interface DescribePlacementCommandInput extends DescribePlacementRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlacementCommand}.
 */
export interface DescribePlacementCommandOutput extends DescribePlacementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a placement in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // DescribePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 * };
 * const command = new DescribePlacementCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlacementResponse
 * //   placement: { // PlacementDescription
 * //     projectName: "STRING_VALUE", // required
 * //     placementName: "STRING_VALUE", // required
 * //     attributes: { // PlacementAttributeMap // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdDate: new Date("TIMESTAMP"), // required
 * //     updatedDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePlacementCommandInput - {@link DescribePlacementCommandInput}
 * @returns {@link DescribePlacementCommandOutput}
 * @see {@link DescribePlacementCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 */
export class DescribePlacementCommand extends $Command<
  DescribePlacementCommandInput,
  DescribePlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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
  constructor(readonly input: DescribePlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePlacementCommandInput, DescribePlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "DescribePlacementCommand";
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
  private serialize(input: DescribePlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePlacementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlacementCommandOutput> {
    return de_DescribePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
