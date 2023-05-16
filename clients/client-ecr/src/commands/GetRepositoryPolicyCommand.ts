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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRepositoryPolicyRequest, GetRepositoryPolicyResponse } from "../models/models_0";
import { de_GetRepositoryPolicyCommand, se_GetRepositoryPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetRepositoryPolicyCommand}.
 */
export interface GetRepositoryPolicyCommandInput extends GetRepositoryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryPolicyCommand}.
 */
export interface GetRepositoryPolicyCommandOutput extends GetRepositoryPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the repository policy for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // GetRepositoryPolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRepositoryPolicyCommandInput - {@link GetRepositoryPolicyCommandInput}
 * @returns {@link GetRepositoryPolicyCommandOutput}
 * @see {@link GetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link RepositoryPolicyNotFoundException} (client fault)
 *  <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @example To get the current policy for a repository
 * ```javascript
 * // This example obtains the repository policy for the repository named ubuntu.
 * const input = {
 *   "repositoryName": "ubuntu"
 * };
 * const command = new GetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "policyText": "{\n  \"Version\" : \"2008-10-17\",\n  \"Statement\" : [ {\n    \"Sid\" : \"new statement\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n     \"AWS\" : \"arn:aws:iam::012345678901:role/CodeDeployDemo\"\n    },\n\"Action\" : [ \"ecr:GetDownloadUrlForLayer\", \"ecr:BatchGetImage\", \"ecr:BatchCheckLayerAvailability\" ]\n } ]\n}",
 *   "registryId": "012345678901",
 *   "repositoryName": "ubuntu"
 * }
 * *\/
 * // example id: getrepositorypolicy-example-1470867669211
 * ```
 *
 */
export class GetRepositoryPolicyCommand extends $Command<
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: GetRepositoryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRepositoryPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetRepositoryPolicyCommand";
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
  private serialize(input: GetRepositoryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRepositoryPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositoryPolicyCommandOutput> {
    return de_GetRepositoryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
