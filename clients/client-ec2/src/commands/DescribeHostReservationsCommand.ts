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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostReservationsRequest, DescribeHostReservationsResult } from "../models/models_3";
import { de_DescribeHostReservationsCommand, se_DescribeHostReservationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeHostReservationsCommand}.
 */
export interface DescribeHostReservationsCommandInput extends DescribeHostReservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostReservationsCommand}.
 */
export interface DescribeHostReservationsCommandOutput extends DescribeHostReservationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes reservations that are associated with Dedicated Hosts in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeHostReservationsRequest
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   HostReservationIdSet: [ // HostReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHostReservationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostReservationsResult
 * //   HostReservationSet: [ // HostReservationSet
 * //     { // HostReservation
 * //       Count: Number("int"),
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       End: new Date("TIMESTAMP"),
 * //       HostIdSet: [ // ResponseHostIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       HostReservationId: "STRING_VALUE",
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       Start: new Date("TIMESTAMP"),
 * //       State: "payment-pending" || "payment-failed" || "active" || "retired",
 * //       UpfrontPrice: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHostReservationsCommandInput - {@link DescribeHostReservationsCommandInput}
 * @returns {@link DescribeHostReservationsCommandOutput}
 * @see {@link DescribeHostReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeHostReservationsCommand extends $Command<
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeHostReservationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHostReservationsCommandInput, DescribeHostReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHostReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeHostReservationsCommand";
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
  private serialize(input: DescribeHostReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHostReservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHostReservationsCommandOutput> {
    return de_DescribeHostReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
