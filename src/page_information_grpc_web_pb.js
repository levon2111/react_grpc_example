/**
 * @fileoverview gRPC-Web generated client stub for page_information
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.page_information = require('./page_information_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.page_information.PageInformationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.page_information.PageInformationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.page_information.PageUrl,
 *   !proto.page_information.PageScreenshot>}
 */
const methodDescriptor_PageInformationService_GetPageScreenshot = new grpc.web.MethodDescriptor(
  '/page_information.PageInformationService/GetPageScreenshot',
  grpc.web.MethodType.UNARY,
  proto.page_information.PageUrl,
  proto.page_information.PageScreenshot,
  /**
   * @param {!proto.page_information.PageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.page_information.PageScreenshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.page_information.PageUrl,
 *   !proto.page_information.PageScreenshot>}
 */
const methodInfo_PageInformationService_GetPageScreenshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.page_information.PageScreenshot,
  /**
   * @param {!proto.page_information.PageUrl} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.page_information.PageScreenshot.deserializeBinary
);


/**
 * @param {!proto.page_information.PageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.page_information.PageScreenshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.page_information.PageScreenshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.page_information.PageInformationServiceClient.prototype.getPageScreenshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/page_information.PageInformationService/GetPageScreenshot',
      request,
      metadata || {},
      methodDescriptor_PageInformationService_GetPageScreenshot,
      callback);
};


/**
 * @param {!proto.page_information.PageUrl} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.page_information.PageScreenshot>}
 *     Promise that resolves to the response
 */
proto.page_information.PageInformationServicePromiseClient.prototype.getPageScreenshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/page_information.PageInformationService/GetPageScreenshot',
      request,
      metadata || {},
      methodDescriptor_PageInformationService_GetPageScreenshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.page_information.PageInformationRequest,
 *   !proto.page_information.PageInformationResponse>}
 */
const methodDescriptor_PageInformationService_GetPageInformation = new grpc.web.MethodDescriptor(
  '/page_information.PageInformationService/GetPageInformation',
  grpc.web.MethodType.UNARY,
  proto.page_information.PageInformationRequest,
  proto.page_information.PageInformationResponse,
  /**
   * @param {!proto.page_information.PageInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.page_information.PageInformationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.page_information.PageInformationRequest,
 *   !proto.page_information.PageInformationResponse>}
 */
const methodInfo_PageInformationService_GetPageInformation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.page_information.PageInformationResponse,
  /**
   * @param {!proto.page_information.PageInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.page_information.PageInformationResponse.deserializeBinary
);


/**
 * @param {!proto.page_information.PageInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.page_information.PageInformationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.page_information.PageInformationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.page_information.PageInformationServiceClient.prototype.getPageInformation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/page_information.PageInformationService/GetPageInformation',
      request,
      metadata || {},
      methodDescriptor_PageInformationService_GetPageInformation,
      callback);
};


/**
 * @param {!proto.page_information.PageInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.page_information.PageInformationResponse>}
 *     Promise that resolves to the response
 */
proto.page_information.PageInformationServicePromiseClient.prototype.getPageInformation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/page_information.PageInformationService/GetPageInformation',
      request,
      metadata || {},
      methodDescriptor_PageInformationService_GetPageInformation);
};


module.exports = proto.page_information;

