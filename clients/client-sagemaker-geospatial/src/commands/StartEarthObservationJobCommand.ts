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
  StartEarthObservationJobInput,
  StartEarthObservationJobInputFilterSensitiveLog,
  StartEarthObservationJobOutput,
  StartEarthObservationJobOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_StartEarthObservationJobCommand, se_StartEarthObservationJobCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 *
 * The input for {@link StartEarthObservationJobCommand}.
 */
export interface StartEarthObservationJobCommandInput extends StartEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link StartEarthObservationJobCommand}.
 */
export interface StartEarthObservationJobCommandOutput extends StartEarthObservationJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to create an Earth observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StartEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StartEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // StartEarthObservationJobInput
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   InputConfig: { // InputConfigInput
 *     PreviousEarthObservationJobArn: "STRING_VALUE",
 *     DataSourceConfig: { // EojDataSourceConfigInput Union: only one key present
 *       S3Data: { // S3DataInput
 *         S3Uri: "STRING_VALUE", // required
 *         MetadataProvider: "STRING_VALUE", // required
 *         KmsKeyId: "STRING_VALUE",
 *       },
 *     },
 *     RasterDataCollectionQuery: { // RasterDataCollectionQueryInput
 *       RasterDataCollectionArn: "STRING_VALUE", // required
 *       TimeRangeFilter: { // TimeRangeFilterInput
 *         StartTime: new Date("TIMESTAMP"), // required
 *         EndTime: new Date("TIMESTAMP"), // required
 *       },
 *       AreaOfInterest: { // AreaOfInterest Union: only one key present
 *         AreaOfInterestGeometry: { // AreaOfInterestGeometry Union: only one key present
 *           PolygonGeometry: { // PolygonGeometryInput
 *             Coordinates: [ // LinearRings // required
 *               [ // LinearRing
 *                 [ // Position
 *                   Number("double"),
 *                 ],
 *               ],
 *             ],
 *           },
 *           MultiPolygonGeometry: { // MultiPolygonGeometryInput
 *             Coordinates: [ // LinearRingsList // required
 *               [
 *                 [
 *                   [
 *                     Number("double"),
 *                   ],
 *                 ],
 *               ],
 *             ],
 *           },
 *         },
 *       },
 *       PropertyFilters: { // PropertyFilters
 *         Properties: [ // PropertyFiltersList
 *           { // PropertyFilter
 *             Property: { // Property Union: only one key present
 *               EoCloudCover: { // EoCloudCoverInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewOffNadir: { // ViewOffNadirInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunAzimuth: { // ViewSunAzimuthInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunElevation: { // ViewSunElevationInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               Platform: { // PlatformInput
 *                 Value: "STRING_VALUE", // required
 *                 ComparisonOperator: "STRING_VALUE",
 *               },
 *               LandsatCloudCoverLand: { // LandsatCloudCoverLandInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *             },
 *           },
 *         ],
 *         LogicalOperator: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   JobConfig: { // JobConfigInput Union: only one key present
 *     BandMathConfig: { // BandMathConfigInput
 *       PredefinedIndices: [ // StringListInput
 *         "STRING_VALUE",
 *       ],
 *       CustomIndices: { // CustomIndicesInput
 *         Operations: [ // OperationsListInput
 *           { // Operation
 *             Name: "STRING_VALUE", // required
 *             Equation: "STRING_VALUE", // required
 *             OutputType: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     ResamplingConfig: { // ResamplingConfigInput
 *       OutputResolution: { // OutputResolutionResamplingInput
 *         UserDefined: { // UserDefined
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     TemporalStatisticsConfig: { // TemporalStatisticsConfigInput
 *       GroupBy: "STRING_VALUE",
 *       Statistics: [ // TemporalStatisticsListInput // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CloudRemovalConfig: { // CloudRemovalConfigInput
 *       AlgorithmName: "STRING_VALUE",
 *       InterpolationValue: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ZonalStatisticsConfig: { // ZonalStatisticsConfigInput
 *       ZoneS3Path: "STRING_VALUE", // required
 *       Statistics: [ // ZonalStatisticsListInput // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *       ZoneS3PathKmsKeyId: "STRING_VALUE",
 *     },
 *     GeoMosaicConfig: { // GeoMosaicConfigInput
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: "<StringListInput>",
 *     },
 *     StackConfig: { // StackConfigInput
 *       OutputResolution: { // OutputResolutionStackInput
 *         Predefined: "STRING_VALUE",
 *         UserDefined: {
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       TargetBands: "<StringListInput>",
 *     },
 *     CloudMaskingConfig: {},
 *     LandCoverSegmentationConfig: {},
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartEarthObservationJobOutput
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   DurationInSeconds: Number("int"), // required
 * //   Status: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   InputConfig: { // InputConfigOutput
 * //     PreviousEarthObservationJobArn: "STRING_VALUE",
 * //     DataSourceConfig: { // EojDataSourceConfigInput Union: only one key present
 * //       S3Data: { // S3DataInput
 * //         S3Uri: "STRING_VALUE", // required
 * //         MetadataProvider: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //     RasterDataCollectionQuery: { // RasterDataCollectionQueryOutput
 * //       RasterDataCollectionArn: "STRING_VALUE", // required
 * //       RasterDataCollectionName: "STRING_VALUE", // required
 * //       TimeRangeFilter: { // TimeRangeFilterOutput
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       AreaOfInterest: { // AreaOfInterest Union: only one key present
 * //         AreaOfInterestGeometry: { // AreaOfInterestGeometry Union: only one key present
 * //           PolygonGeometry: { // PolygonGeometryInput
 * //             Coordinates: [ // LinearRings // required
 * //               [ // LinearRing
 * //                 [ // Position
 * //                   Number("double"),
 * //                 ],
 * //               ],
 * //             ],
 * //           },
 * //           MultiPolygonGeometry: { // MultiPolygonGeometryInput
 * //             Coordinates: [ // LinearRingsList // required
 * //               [
 * //                 [
 * //                   [
 * //                     Number("double"),
 * //                   ],
 * //                 ],
 * //               ],
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       PropertyFilters: { // PropertyFilters
 * //         Properties: [ // PropertyFiltersList
 * //           { // PropertyFilter
 * //             Property: { // Property Union: only one key present
 * //               EoCloudCover: { // EoCloudCoverInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewOffNadir: { // ViewOffNadirInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewSunAzimuth: { // ViewSunAzimuthInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewSunElevation: { // ViewSunElevationInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               Platform: { // PlatformInput
 * //                 Value: "STRING_VALUE", // required
 * //                 ComparisonOperator: "STRING_VALUE",
 * //               },
 * //               LandsatCloudCoverLand: { // LandsatCloudCoverLandInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         LogicalOperator: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   JobConfig: { // JobConfigInput Union: only one key present
 * //     BandMathConfig: { // BandMathConfigInput
 * //       PredefinedIndices: [ // StringListInput
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomIndices: { // CustomIndicesInput
 * //         Operations: [ // OperationsListInput
 * //           { // Operation
 * //             Name: "STRING_VALUE", // required
 * //             Equation: "STRING_VALUE", // required
 * //             OutputType: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ResamplingConfig: { // ResamplingConfigInput
 * //       OutputResolution: { // OutputResolutionResamplingInput
 * //         UserDefined: { // UserDefined
 * //           Value: Number("float"), // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       AlgorithmName: "STRING_VALUE",
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     TemporalStatisticsConfig: { // TemporalStatisticsConfigInput
 * //       GroupBy: "STRING_VALUE",
 * //       Statistics: [ // TemporalStatisticsListInput // required
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CloudRemovalConfig: { // CloudRemovalConfigInput
 * //       AlgorithmName: "STRING_VALUE",
 * //       InterpolationValue: "STRING_VALUE",
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ZonalStatisticsConfig: { // ZonalStatisticsConfigInput
 * //       ZoneS3Path: "STRING_VALUE", // required
 * //       Statistics: [ // ZonalStatisticsListInput // required
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ZoneS3PathKmsKeyId: "STRING_VALUE",
 * //     },
 * //     GeoMosaicConfig: { // GeoMosaicConfigInput
 * //       AlgorithmName: "STRING_VALUE",
 * //       TargetBands: "<StringListInput>",
 * //     },
 * //     StackConfig: { // StackConfigInput
 * //       OutputResolution: { // OutputResolutionStackInput
 * //         Predefined: "STRING_VALUE",
 * //         UserDefined: {
 * //           Value: Number("float"), // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       TargetBands: "<StringListInput>",
 * //     },
 * //     CloudMaskingConfig: {},
 * //     LandCoverSegmentationConfig: {},
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartEarthObservationJobCommandInput - {@link StartEarthObservationJobCommandInput}
 * @returns {@link StartEarthObservationJobCommandOutput}
 * @see {@link StartEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link StartEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 */
export class StartEarthObservationJobCommand extends $Command<
  StartEarthObservationJobCommandInput,
  StartEarthObservationJobCommandOutput,
  SageMakerGeospatialClientResolvedConfig
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
  constructor(readonly input: StartEarthObservationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerGeospatialClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartEarthObservationJobCommandInput, StartEarthObservationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartEarthObservationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "StartEarthObservationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEarthObservationJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartEarthObservationJobOutputFilterSensitiveLog,
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
  private serialize(input: StartEarthObservationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartEarthObservationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartEarthObservationJobCommandOutput> {
    return de_StartEarthObservationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
