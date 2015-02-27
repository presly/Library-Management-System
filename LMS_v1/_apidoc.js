// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefineSuccessStructure APISuccess
 * @apiVersion 0.0.1
 *
 * @apiSuccess Successful The request was processed successfully.
 *
 * @apiSuccessExample Response:
 *     HTTP/1.1 200 OK
 *     meta: {
 *       "code": 0,
 *       "errorMessage": "Successful"
 *     }
 */

/**
 * @apiDefineErrorStructure DatabaseFailureError
 * @apiVersion 0.0.1
 *
 * @apiError DatabaseFailure Error Querying Database
 *
 * @apiErrorExample Response:
 *     HTTP/1.1 500 Internal Server Error
 *     meta: {
 *       "code": 5001,
 *       "errorMessage": "DatabaseFailure"
 *     }
 */

/**
 * @apiDefineErrorStructure NotAuthorizedError
 * @apiVersion 0.0.1
 *
 * @apiError NotAuthorized Not Authorized.
 *
 * @apiErrorExample Response:
 *     HTTP/1.1 401 Not Authorized
 *     meta: {
 *       "code": 2001,
 *       "errorMessage": "NotAuthorized"
 *     }
 */

/**
 * @apiDefineErrorStructure DuplicateRecordError
 * @apiVersion 0.0.1
 *
 * @apiError DuplicateRecord The Records Already Exists.
 *
 * @apiErrorExample Response:
 *     HTTP/1.1 400 Bad Request
 *     meta: {
 *       "code": 1015,
 *       "errorMessage": "DuplicateRecord"
 *     }
 */

