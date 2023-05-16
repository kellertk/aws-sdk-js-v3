// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Decoder as __Decoder,
  Encoder as __Encoder,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
} from "@smithy/types";

import {
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "./commands/CreateMediaCapturePipelineCommand";
import {
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
} from "./commands/CreateMediaConcatenationPipelineCommand";
import {
  CreateMediaInsightsPipelineCommandInput,
  CreateMediaInsightsPipelineCommandOutput,
} from "./commands/CreateMediaInsightsPipelineCommand";
import {
  CreateMediaInsightsPipelineConfigurationCommandInput,
  CreateMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/CreateMediaInsightsPipelineConfigurationCommand";
import {
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
} from "./commands/CreateMediaLiveConnectorPipelineCommand";
import {
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "./commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMediaInsightsPipelineConfigurationCommandInput,
  DeleteMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/DeleteMediaInsightsPipelineConfigurationCommand";
import {
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
} from "./commands/DeleteMediaPipelineCommand";
import {
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "./commands/GetMediaCapturePipelineCommand";
import {
  GetMediaInsightsPipelineConfigurationCommandInput,
  GetMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/GetMediaInsightsPipelineConfigurationCommand";
import { GetMediaPipelineCommandInput, GetMediaPipelineCommandOutput } from "./commands/GetMediaPipelineCommand";
import {
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "./commands/ListMediaCapturePipelinesCommand";
import {
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "./commands/ListMediaInsightsPipelineConfigurationsCommand";
import { ListMediaPipelinesCommandInput, ListMediaPipelinesCommandOutput } from "./commands/ListMediaPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateMediaInsightsPipelineConfigurationCommandInput,
  UpdateMediaInsightsPipelineConfigurationCommandOutput,
} from "./commands/UpdateMediaInsightsPipelineConfigurationCommand";
import {
  UpdateMediaInsightsPipelineStatusCommandInput,
  UpdateMediaInsightsPipelineStatusCommandOutput,
} from "./commands/UpdateMediaInsightsPipelineStatusCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateMediaCapturePipelineCommandInput
  | CreateMediaConcatenationPipelineCommandInput
  | CreateMediaInsightsPipelineCommandInput
  | CreateMediaInsightsPipelineConfigurationCommandInput
  | CreateMediaLiveConnectorPipelineCommandInput
  | DeleteMediaCapturePipelineCommandInput
  | DeleteMediaInsightsPipelineConfigurationCommandInput
  | DeleteMediaPipelineCommandInput
  | GetMediaCapturePipelineCommandInput
  | GetMediaInsightsPipelineConfigurationCommandInput
  | GetMediaPipelineCommandInput
  | ListMediaCapturePipelinesCommandInput
  | ListMediaInsightsPipelineConfigurationsCommandInput
  | ListMediaPipelinesCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMediaInsightsPipelineConfigurationCommandInput
  | UpdateMediaInsightsPipelineStatusCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateMediaCapturePipelineCommandOutput
  | CreateMediaConcatenationPipelineCommandOutput
  | CreateMediaInsightsPipelineCommandOutput
  | CreateMediaInsightsPipelineConfigurationCommandOutput
  | CreateMediaLiveConnectorPipelineCommandOutput
  | DeleteMediaCapturePipelineCommandOutput
  | DeleteMediaInsightsPipelineConfigurationCommandOutput
  | DeleteMediaPipelineCommandOutput
  | GetMediaCapturePipelineCommandOutput
  | GetMediaInsightsPipelineConfigurationCommandOutput
  | GetMediaPipelineCommandOutput
  | ListMediaCapturePipelinesCommandOutput
  | ListMediaInsightsPipelineConfigurationsCommandOutput
  | ListMediaPipelinesCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMediaInsightsPipelineConfigurationCommandOutput
  | UpdateMediaInsightsPipelineStatusCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @aws-sdk/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * The {@link @aws-sdk/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
type ChimeSDKMediaPipelinesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ChimeSDKMediaPipelinesClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKMediaPipelinesClientConfig extends ChimeSDKMediaPipelinesClientConfigType {}

/**
 * @public
 */
type ChimeSDKMediaPipelinesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ChimeSDKMediaPipelinesClient class. This is resolved and normalized from the {@link ChimeSDKMediaPipelinesClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKMediaPipelinesClientResolvedConfig extends ChimeSDKMediaPipelinesClientResolvedConfigType {}

/**
 * @public
 * <p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
 *          create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>
 */
export class ChimeSDKMediaPipelinesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeSDKMediaPipelinesClientResolvedConfig
> {
  /**
   * The resolved configuration of ChimeSDKMediaPipelinesClient class. This is resolved and normalized from the {@link ChimeSDKMediaPipelinesClientConfig | constructor configuration interface}.
   */
  readonly config: ChimeSDKMediaPipelinesClientResolvedConfig;

  constructor(configuration: ChimeSDKMediaPipelinesClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
