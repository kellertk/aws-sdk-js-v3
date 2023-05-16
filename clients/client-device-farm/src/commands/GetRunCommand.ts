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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetRunRequest, GetRunResult } from "../models/models_0";
import { de_GetRunCommand, se_GetRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetRunCommand}.
 */
export interface GetRunCommandInput extends GetRunRequest {}
/**
 * @public
 *
 * The output of {@link GetRunCommand}.
 */
export interface GetRunCommandOutput extends GetRunResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetRunRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * // { // GetRunResult
 * //   run: { // Run
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "BUILTIN_FUZZ" || "BUILTIN_EXPLORER" || "WEB_PERFORMANCE_PROFILE" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "CALABASH" || "INSTRUMENTATION" || "UIAUTOMATION" || "UIAUTOMATOR" || "XCTEST" || "XCTEST_UI" || "REMOTE_ACCESS_RECORD" || "REMOTE_ACCESS_REPLAY",
 * //     platform: "ANDROID" || "IOS",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     counters: { // Counters
 * //       total: Number("int"),
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //       warned: Number("int"),
 * //       errored: Number("int"),
 * //       stopped: Number("int"),
 * //       skipped: Number("int"),
 * //     },
 * //     message: "STRING_VALUE",
 * //     totalJobs: Number("int"),
 * //     completedJobs: Number("int"),
 * //     billingMethod: "METERED" || "UNMETERED",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     networkProfile: { // NetworkProfile
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "CURATED" || "PRIVATE",
 * //       uplinkBandwidthBits: Number("long"),
 * //       downlinkBandwidthBits: Number("long"),
 * //       uplinkDelayMs: Number("long"),
 * //       downlinkDelayMs: Number("long"),
 * //       uplinkJitterMs: Number("long"),
 * //       downlinkJitterMs: Number("long"),
 * //       uplinkLossPercent: Number("int"),
 * //       downlinkLossPercent: Number("int"),
 * //     },
 * //     parsingResultUrl: "STRING_VALUE",
 * //     resultCode: "PARSING_FAILED" || "VPC_ENDPOINT_SETUP_FAILED",
 * //     seed: Number("int"),
 * //     appUpload: "STRING_VALUE",
 * //     eventCount: Number("int"),
 * //     jobTimeoutMinutes: Number("int"),
 * //     devicePoolArn: "STRING_VALUE",
 * //     locale: "STRING_VALUE",
 * //     radios: { // Radios
 * //       wifi: true || false,
 * //       bluetooth: true || false,
 * //       nfc: true || false,
 * //       gps: true || false,
 * //     },
 * //     location: { // Location
 * //       latitude: Number("double"), // required
 * //       longitude: Number("double"), // required
 * //     },
 * //     customerArtifactPaths: { // CustomerArtifactPaths
 * //       iosPaths: [ // IosPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       androidPaths: [ // AndroidPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       deviceHostPaths: [ // DeviceHostPaths
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     webUrl: "STRING_VALUE",
 * //     skipAppResign: true || false,
 * //     testSpecArn: "STRING_VALUE",
 * //     deviceSelectionResult: { // DeviceSelectionResult
 * //       filters: [ // DeviceFilters
 * //         { // DeviceFilter
 * //           attribute: "ARN" || "PLATFORM" || "OS_VERSION" || "MODEL" || "AVAILABILITY" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE", // required
 * //           operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS", // required
 * //           values: [ // DeviceFilterValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       matchedDevicesCount: Number("int"),
 * //       maxDevices: Number("int"),
 * //     },
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRunCommandInput - {@link GetRunCommandInput}
 * @returns {@link GetRunCommandOutput}
 * @see {@link GetRunCommandInput} for command's `input` shape.
 * @see {@link GetRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To get information about a test run
 * ```javascript
 * // The following example gets information about a specific test run.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE"
 * };
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {
 *     "name": "My Test Run",
 *     "type": "BUILTIN_EXPLORER",
 *     "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
 *     "billingMethod": "METERED",
 *     "completedJobs": 0,
 *     "counters": {
 *       "errored": 0,
 *       "failed": 0,
 *       "passed": 0,
 *       "skipped": 0,
 *       "stopped": 0,
 *       "total": 0,
 *       "warned": 0
 *     },
 *     "created": "1472667509.852",
 *     "deviceMinutes": {
 *       "metered": 0,
 *       "total": 0,
 *       "unmetered": 0
 *     },
 *     "platform": "ANDROID",
 *     "result": "PENDING",
 *     "status": "RUNNING",
 *     "totalJobs": 3
 *   }
 * }
 * *\/
 * // example id: to-get-a-test-run-1471015895657
 * ```
 *
 */
export class GetRunCommand extends $Command<GetRunCommandInput, GetRunCommandOutput, DeviceFarmClientResolvedConfig> {
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
  constructor(readonly input: GetRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRunCommandInput, GetRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetRunCommand";
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
  private serialize(input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRunCommandOutput> {
    return de_GetRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
